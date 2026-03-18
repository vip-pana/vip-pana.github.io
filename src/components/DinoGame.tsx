import { useEffect, useRef, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 120;
const GROUND_Y = 90;
const DINO_X = 50;
const DINO_W = 24; // pixel grid: 12 cols * 2px
const DINO_H = 28; // pixel grid: 14 rows * 2px
const PIXEL = 2; // size of one "pixel" in the sprite

// 8-bit dino sprite (14 rows x 12 cols), 1 = body, 2 = eye, 0 = empty
const DINO_SPRITE: number[][] = [
  [0,0,0,0,1,1,1,1,1,1,1,0],
  [0,0,0,1,1,1,1,1,1,1,1,1],
  [0,0,0,1,1,1,2,1,1,1,1,1],
  [0,0,0,1,1,1,1,1,1,1,1,0],
  [0,0,0,1,1,1,1,1,1,1,0,0],
  [0,0,1,1,1,1,1,1,1,0,0,0],
  [0,1,1,1,1,1,1,1,1,0,0,0],
  [1,1,1,1,1,1,1,1,1,0,0,0],
  [1,1,1,1,1,1,1,1,0,0,0,0],
  [0,1,1,1,1,1,1,0,0,0,0,0],
  [0,0,1,1,0,1,1,0,0,0,0,0],
  [0,0,1,1,0,1,1,0,0,0,0,0],
  [0,0,1,0,0,0,1,0,0,0,0,0],
  [0,0,1,0,0,0,1,0,0,0,0,0],
];
const GRAVITY = 0.6;
const JUMP_FORCE = -12;
const CACTUS_W = 14; // 7 cols * 2px
const CACTUS_H = 30; // 15 rows * 2px
const INITIAL_SPEED = 4;

// 8-bit cactus sprite (15 rows x 7 cols), 1 = body, 0 = empty
const CACTUS_SPRITE: number[][] = [
  [0,0,1,1,0,0,0],
  [0,0,1,1,0,0,0],
  [1,0,1,1,0,1,0],
  [1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1],
  [0,0,1,1,0,0,1],
  [0,0,1,1,0,0,0],
  [0,0,1,1,0,0,0],
  [0,0,1,1,0,0,0],
  [0,0,1,1,0,0,0],
  [0,0,1,1,0,0,0],
  [0,0,1,1,0,0,0],
  [0,0,1,1,0,0,0],
  [0,1,1,1,1,0,0],
  [0,1,1,1,1,0,0],
];

// 8-bit star sprite (5x5), 1 = lit
const STAR_SPRITE: number[][] = [
  [0,0,1,0,0],
  [0,0,1,0,0],
  [1,1,1,1,1],
  [0,0,1,0,0],
  [0,0,1,0,0],
];

// Fixed star positions (x, y) in canvas space — above ground
const STARS: [number, number][] = [
  [80, 15], [160, 30], [250, 10], [340, 25], [430, 12],
  [510, 35], [70, 50], [200, 55], [390, 48], [560, 20],
];

type GameState = 'idle' | 'playing' | 'gameover';

interface Cactus {
  x: number;
}

export const DinoGame = () => {
  const [open, setOpen] = useState(false);
  const [highScore, setHighScore] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    dinoY: GROUND_Y - DINO_H,
    velY: 0,
    isJumping: false,
    cactuses: [] as Cactus[],
    speed: INITIAL_SPEED,
    frame: 0,
    score: 0,
    animId: 0,
    gameState: 'idle' as GameState,
  });

  const startGame = useCallback(() => {
    const s = stateRef.current;
    s.dinoY = GROUND_Y - DINO_H;
    s.velY = 0;
    s.isJumping = false;
    s.cactuses = [];
    s.speed = INITIAL_SPEED;
    s.frame = 0;
    s.score = 0;
    s.gameState = 'playing';
  }, []);

  const jump = useCallback(() => {
    const s = stateRef.current;
    if (s.gameState === 'idle') {
      startGame();
      return;
    }
    if (s.gameState === 'gameover') {
      startGame();
      return;
    }
    if (!s.isJumping) {
      s.velY = JUMP_FORCE;
      s.isJumping = true;
    }
  }, [startGame]);

  useEffect(() => {
    if (!open) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const BG = '#0d0d0d';
    const FG = '#f0f0f0';
    const ACCENT = '#ff6b00';

    const drawScene = () => {
      const s = stateRef.current;

      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // ground
      ctx.strokeStyle = FG;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y);
      ctx.lineTo(CANVAS_WIDTH, GROUND_Y);
      ctx.stroke();

      // dino pixel art
      for (let row = 0; row < DINO_SPRITE.length; row++) {
        for (let col = 0; col < DINO_SPRITE[row].length; col++) {
          const cell = DINO_SPRITE[row][col];
          if (cell === 0) continue;
          ctx.fillStyle = cell === 2 ? BG : ACCENT;
          ctx.fillRect(DINO_X + col * PIXEL, s.dinoY + row * PIXEL, PIXEL, PIXEL);
        }
      }

      // stars (static, 8-bit pixel art)
      for (const [sx, sy] of STARS) {
        for (let row = 0; row < STAR_SPRITE.length; row++) {
          for (let col = 0; col < STAR_SPRITE[row].length; col++) {
            if (STAR_SPRITE[row][col] === 0) continue;
            ctx.fillStyle = '#808080';
            ctx.fillRect(sx + col * PIXEL, sy + row * PIXEL, PIXEL, PIXEL);
          }
        }
      }

      // cactuses (8-bit pixel art)
      for (const c of s.cactuses) {
        for (let row = 0; row < CACTUS_SPRITE.length; row++) {
          for (let col = 0; col < CACTUS_SPRITE[row].length; col++) {
            if (CACTUS_SPRITE[row][col] === 0) continue;
            ctx.fillStyle = FG;
            ctx.fillRect(c.x + col * PIXEL, GROUND_Y - CACTUS_H + row * PIXEL, PIXEL, PIXEL);
          }
        }
      }

      // score
      ctx.fillStyle = FG;
      ctx.font = '12px "Fira Code", monospace';
      ctx.textAlign = 'right';
      ctx.fillText(`score: ${s.score}`, CANVAS_WIDTH - 10, 20);

      if (s.gameState === 'idle') {
        ctx.fillStyle = FG;
        ctx.font = '14px "Fira Code", monospace';
        ctx.textAlign = 'center';
        ctx.fillText('press space or tap to start', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
      }

      if (s.gameState === 'gameover') {
        ctx.fillStyle = ACCENT;
        ctx.font = 'bold 16px "Fira Code", monospace';
        ctx.textAlign = 'center';
        ctx.fillText('game over', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 10);
        ctx.fillStyle = FG;
        ctx.font = '12px "Fira Code", monospace';
        ctx.fillText('press space or tap to restart', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 12);
      }
    };

    const loop = () => {
      const s = stateRef.current;

      if (s.gameState === 'playing') {
        s.velY += GRAVITY;
        s.dinoY += s.velY;

        if (s.dinoY >= GROUND_Y - DINO_H) {
          s.dinoY = GROUND_Y - DINO_H;
          s.velY = 0;
          s.isJumping = false;
        }

        s.cactuses = s.cactuses
          .map(c => ({ x: c.x - s.speed }))
          .filter(c => c.x + CACTUS_W > 0);

        s.frame++;
        const spawnInterval = Math.max(60, 100 - Math.floor(s.score / 5));
        if (s.frame % spawnInterval === 0) {
          s.cactuses.push({ x: CANVAS_WIDTH });
        }

        s.speed = INITIAL_SPEED + s.score * 0.02;
        s.score = Math.floor(s.frame / 6);

        for (const c of s.cactuses) {
          const cx = c.x;
          const cy = GROUND_Y - CACTUS_H;
          if (
            DINO_X < cx + CACTUS_W &&
            DINO_X + DINO_W > cx &&
            s.dinoY < cy + CACTUS_H &&
            s.dinoY + DINO_H > cy
          ) {
            s.gameState = 'gameover';
            setHighScore(prev => Math.max(prev, s.score));
          }
        }
      }

      drawScene();
      s.animId = requestAnimationFrame(loop);
    };

    stateRef.current.animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(stateRef.current.animId);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        jump();
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, jump]);

  const handleClose = () => {
    setOpen(false);
    stateRef.current.gameState = 'idle';
    cancelAnimationFrame(stateRef.current.animId);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col items-center py-3 gap-1">
              <div className="border-2 border-nord-accent" style={{ lineHeight: 0 }}>
                <canvas
                  ref={canvasRef}
                  width={CANVAS_WIDTH}
                  height={CANVAS_HEIGHT}
                  onClick={jump}
                  className="block cursor-pointer"
                  style={{ touchAction: 'none' }}
                  onTouchStart={e => {
                    e.preventDefault();
                    jump();
                  }}
                />
              </div>
              {highScore > 0 && (
                <p className="text-nord-deep-blue text-xs font-mono">best: {highScore}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => (open ? handleClose() : setOpen(true))}
        className="text-nord-deep-blue hover:text-nord-accent transition-colors text-xs font-bold uppercase tracking-wider cursor-pointer"
        aria-label="Dino game easter egg"
        title={open ? 'Chiudi gioco' : 'Gioca!'}
      >
        {open ? '[x] dino' : '[~] dino'}
      </button>
    </>
  );
};
