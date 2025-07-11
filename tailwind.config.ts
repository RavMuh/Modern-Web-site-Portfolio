import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        // Tech floating effect
        techFloat: {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) rotate(0deg)',
            opacity: '0.3'
          },
          '25%': { 
            transform: 'translateY(-40px) translateX(30px) rotate(8deg)',
            opacity: '0.6'
          },
          '50%': { 
            transform: 'translateY(-20px) translateX(-25px) rotate(-5deg)',
            opacity: '0.4'
          },
          '75%': { 
            transform: 'translateY(-60px) translateX(15px) rotate(3deg)',
            opacity: '0.7'
          }
        },
        
        // Network line pulse
        linePulse: {
          '0%, 100%': { 
            opacity: '0.3',
            strokeWidth: '1'
          },
          '50%': { 
            opacity: '0.8',
            strokeWidth: '2'
          }
        },
        
        // Network dot pulse
        dotPulse: {
          '0%, 100%': { 
            opacity: '0.5',
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(2)'
          }
        },
        
        // Polygon rotation
        polygonRotate: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
          '100%': { transform: 'rotate(360deg) scale(1)' }
        },
        
        // 3D Card floating
        card3D: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)',
          },
          '25%': { 
            transform: 'translateY(-30px) rotateX(10deg) rotateY(10deg) rotateZ(2deg)',
          },
          '50%': { 
            transform: 'translateY(-15px) rotateX(-5deg) rotateY(-5deg) rotateZ(-1deg)',
          },
          '75%': { 
            transform: 'translateY(-45px) rotateX(5deg) rotateY(15deg) rotateZ(3deg)',
          }
        },
        
        // Particle floating
        particleFloat: {
          '0%': { 
            transform: 'translateY(100vh) translateX(0px) rotate(0deg)',
            opacity: '0'
          },
          '10%': { 
            opacity: '1'
          },
          '90%': { 
            opacity: '1'
          },
          '100%': { 
            transform: 'translateY(-100px) translateX(200px) rotate(360deg)',
            opacity: '0'
          }
        },
        
        // Orb pulsing
        orbPulse: {
          '0%, 100%': { 
            opacity: '0.1',
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: '0.3',
            transform: 'scale(1.2)'
          }
        },
        
        // Ring rotation
        ringRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        
        // Matrix falling effect
        matrixFall: {
          '0%': { 
            transform: 'translateY(-100px)',
            opacity: '0'
          },
          '10%': { 
            opacity: '1'
          },
          '90%': { 
            opacity: '1'
          },
          '100%': { 
            transform: 'translateY(100vh)',
            opacity: '0'
          }
        },
        
        // Hexagon spinning
        hexSpin: {
          '0%, 100%': { 
            transform: 'rotate(0deg) scale(1)',
            opacity: '0.3'
          },
          '50%': { 
            transform: 'rotate(180deg) scale(1.3)',
            opacity: '0.7'
          }
        },
        
        // Horizontal scanning
        scanHorizontal: {
          '0%': { 
            transform: 'translateY(-100%)',
            opacity: '0'
          },
          '50%': { 
            opacity: '1'
          },
          '100%': { 
            transform: 'translateY(100vh)',
            opacity: '0'
          }
        },
        
        // Vertical scanning
        scanVertical: {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '50%': { 
            opacity: '1'
          },
          '100%': { 
            transform: 'translateX(100vw)',
            opacity: '0'
          }
        },
        
        // Grid pulsing
        gridPulse: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.4' }
        },
        
        // Fade in effect
        fadeIn: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(40px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          }
        }
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      animation: {
        'accordion-up': 'accordion-up 0.2s ease-out',
        // Tech floating animations
        'tech-float': 'techFloat 12s ease-in-out infinite',
        // Network animations
        'line-pulse': 'linePulse 3s ease-in-out infinite',
        'dot-pulse': 'dotPulse 2s ease-in-out infinite',
        'polygon-rotate': 'polygonRotate 15s linear infinite',
        // 3D Card animations
        'card-3d': 'card3D 10s ease-in-out infinite',
        // Particle animations
        'particle-float': 'particleFloat 25s linear infinite',
        // Orb animations
        'orb-pulse': 'orbPulse 6s ease-in-out infinite',
        // Ring animations
        'ring-rotate': 'ringRotate 20s linear infinite',
        'ring-reverse': 'ringRotate 15s linear infinite reverse',
        // Matrix effect
        'matrix-fall': 'matrixFall 15s linear infinite',
        // Hexagon animations
        'hex-spin': 'hexSpin 12s ease-in-out infinite',
        // Scanning animations
        'scan-h': 'scanHorizontal 10s linear infinite',
        'scan-v': 'scanVertical 12s linear infinite',
        // Grid animations
        'grid-pulse': 'gridPulse 4s ease-in-out infinite',
        // Fade in animations
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-delay-1': 'fadeIn 1s ease-out 0.2s both',
        'fade-in-delay-2': 'fadeIn 1s ease-out 0.4s both',
        'fade-in-delay-3': 'fadeIn 1s ease-out 0.6s both',
        'fade-in-delay-4': 'fadeIn 1s ease-out 0.8s both',
        'fade-in-delay-5': 'fadeIn 1s ease-out 1s both',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  safelist: [
    'bg-background',
    'dark:bg-background',
    'text-foreground',
    'dark:text-foreground',
  ],
};
export default config;
