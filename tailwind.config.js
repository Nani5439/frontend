import typography from '@tailwindcss/typography'
import tailwindCssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/streamdown/dist/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sidebar-gradient-deep':
          'linear-gradient(to bottom, hsl(var(--sidebar-foreground)) 0%, hsl(var(--sidebar-primary)) 60%, hsl(var(--sidebar-secondary)) 100%)',
        'sidebar-gradient-dark-deep':
          'linear-gradient(to bottom, hsl(var(--sidebar-foreground)) 0%, hsl(var(--sidebar-primary)) 60%, hsl(var(--sidebar-secondary)) 100%)'
      },
      flex: {
        100: '0 0 100%',
        0.5: '0 0 50%'
      },
      height: {
        // ? Fitting the height of the screen - TopBar height
        stretch: 'calc(100vh - 100px)'
      },
      zIndex: {
        base: '1000',
        'fullscreen-editor': '9999',
        'modal-overlay': '10000'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-collapsible-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-collapsible-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'collapsible-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-collapsible-content-height)'
          }
        },
        'collapsible-up': {
          from: {
            height: 'var(--radix-collapsible-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'thumb-pop': {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.4)' },
          '60%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' }
        },
        'thumb-shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-4px)' },
          '40%': { transform: 'translateX(4px)' },
          '60%': { transform: 'translateX(-2px)' },
          '80%': { transform: 'translateX(2px)' }
        },
        'drop-in': {
          '0%': {
            opacity: 0,
            transform: 'translate(0%, -50%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translate(0%, 0)'
          }
        },
        shimmer: {
          '0%': {
            'background-position': '-200px 0'
          },
          '100%': {
            'background-position': 'calc(200px + 100%) 0'
          }
        },
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' }
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up': 'accordion-up 0.3s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-out',
        'collapsible-up': 'collapsible-up 0.2s ease-out',
        'thumb-pop': 'thumb-pop 0.4s ease-in-out',
        'thumb-shake': 'thumb-shake 0.4s ease-in-out',
        'drop-in': 'drop-in 0.5s ease-in-out',
        shimmer: 'shimmer 2s ease-in-out infinite',
        'shimmer-slow': 'shimmer 3s ease-in-out infinite',
        'shimmer-fast': 'shimmer 1s ease-in-out infinite',
        'star-movement-bottom':
          'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate'
      },
      typography: () => ({
        DEFAULT: {
          css: {
            color: 'hsl(var(--foreground))',
            h1: {
              color: 'hsl(var(--foreground))',
              fontWeight: '800',
              fontSize: ['1rem']
            },
            h2: {
              color: 'hsl(var(--foreground))',
              fontWeight: '700',
              fontSize: ['1rem']
            },
            h3: {
              color: 'hsl(var(--foreground))',
              fontWeight: '600',
              fontSize: ['0.938rem'],
              margin: '0.5rem 0 0.5rem'
            },
            h4: {
              color: 'hsl(var(--foreground))',
              fontWeight: '500',
              fontSize: ['1rem']
            },
            strong: {
              color: 'hsl(var(--foreground))',
              fontWeight: '600'
            },
            p: {
              margin: '0',
              color: 'hsl(var(--muted-foreground))',
              fontSize: [
                '0.938rem',
                {
                  lineHeight: '1.25rem',
                  letterSpacing: '-0.006rem',
                  fontWeight: '400'
                }
              ]
            },
            a: {
              color: 'hsl(var(--primary))',
              '&:hover': {
                color: 'var(--primary-hover)'
              },
              textDecoration: 'underline'
            },
            blockquote: {
              color: 'hsl(var(--muted-foreground))',
              borderLeftColor: 'hsl(var(--input))'
            },
            code: {
              color: 'hsl(var(--foreground))',
              backgroundColor: 'hsla(var(--muted-foreground), 0.1)',
              borderRadius: '0.125rem',
              margin: '0 0.125rem',
              padding: '0.125rem 0.375rem'
            },
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            pre: {
              color: 'inherit',
              backgroundColor: 'inherit',
              fontSize: ['1rem'],
              margin: '0'
            },
            thead: {
              color: 'hsl(var(--foreground))',
              th: {
                color: 'hsl(var(--foreground))'
              }
            },
            hr: {
              borderColor: 'hsl(var(--border))'
            },
            ol: {
              li: {
                '&:before': {
                  color: 'hsl(var(--foreground))'
                },
                '&:marker': {
                  color: 'hsl(var(--foreground))'
                },
                p: {
                  margin: '0'
                },
                margin: '0'
              },
              margin: '0',
              fontSize: ['0.938rem']
            },
            ul: {
              li: {
                '&:before': {
                  color: 'hsl(var(--muted-foreground))'
                },
                '&:marker': {
                  color: 'hsl(var(--muted-foreground))'
                },
                margin: '0'
              },
              margin: '0 !important',
              fontSize: ['0.938rem']
            },
            figcaption: {
              color: 'hsl(var(--accent-foreground))'
            }
          }
        },
        dark: {
          css: {
            p: {
              color: 'hsl(var(--white))'
            }
          }
        }
      })
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    colors: {
      'th-blue-200': 'var(--blue-200)',
      'th-blue-300': 'hsl(var(--blue-300))',
      'unknown-status': 'rgb(var(--unknown-status))',
      'healthy-status': 'rgb(var(--healthy-status))',
      'limited-status': 'rgb(var(--limited-status))',
      'down-status': 'rgb(var(--down-status))',
      'monitored-for': 'rgb(var(--monitored-for-icon))',

      // Trigger icon colors
      'trigger-manual': 'hsl(var(--manual-icon))',
      'trigger-alert': 'hsl(var(--alert-icon))',
      'trigger-scheduled': 'hsl(var(--scheduled-icon))',
      'trigger-webhook': 'hsl(var(--webhook-icon))',

      // New Code theme
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      border: 'hsl(var(--border))',
      transparent: 'hsl(var(--transparent))',
      foreground: 'hsl(var(--foreground))',
      black: 'hsl(var(--black))',
      white: 'hsl(var(--white))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
        emphasis: 'hsl(var(--primary-emphasis))'
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
        emphasis: 'hsl(var(--secondary-emphasis))',
        subtle: 'hsl(var(--secondary-subtle))'
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
        secondary: 'hsl(var(--destructive-secondary))',
        light: 'hsl(var(--destructive-light))',
        subtle: 'hsl(var(--destructive-subtle))'
      },
      success: {
        DEFAULT: 'hsl(var(--success))',
        foreground: 'hsl(var(--success-foreground))',
        secondary: 'hsl(var(--success-secondary))',
        light: 'hsl(var(--success-light-green))',
        badge: 'hsl(var(--success-badge))'
      },
      alert: {
        DEFAULT: 'hsl(var(--alert))',
        foreground: 'hsl(var(--alert-foreground))'
      },
      pending: {
        DEFAULT: 'hsl(var(--pending))',
        foreground: 'hsl(var(--pending-foreground))'
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))'
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))'
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))'
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))'
      },
      backdrop: {
        DEFAULT: 'hsl(var(--backdrop))'
      },
      sidebar: {
        foreground: 'hsl(var(--sidebar-foreground))',
        primary: 'hsl(var(--sidebar-primary))',
        secondary: 'hsl(var(--sidebar-secondary))'
      }
    },
    fontSize: {
      t1: [
        '32px',
        {
          lineHeight: '48px',
          letterSpacing: '-0.2px',
          fontWeight: '800'
        }
      ],
      t2: [
        '22px',
        {
          lineHeight: '20px',
          letterSpacing: '-0.1px',
          fontWeight: '600'
        }
      ],
      t3: [
        '15px',
        {
          lineHeight: '22px',
          letterSpacing: '-0.2px',
          fontWeight: '600'
        }
      ],
      t4: [
        '13px',
        {
          lineHeight: '19px',
          letterSpacing: '-0.1px',
          fontWeight: '600'
        }
      ],
      t5: [
        '13px',
        {
          lineHeight: '20px',
          letterSpacing: '-0.1px',
          fontWeight: '400'
        }
      ],
      t6: [
        '12px',
        {
          lineHeight: '18px',
          letterSpacing: '0.15px',
          fontWeight: '500'
        }
      ],
      t7: [
        '11px',
        {
          lineHeight: '16px',
          letterSpacing: '0.2px',
          fontWeight: '600'
        }
      ],
      t8: [
        '10px',
        {
          lineHeight: '15px',
          letterSpacing: '0.3px',
          fontWeight: '500'
        }
      ],
      t9: [
        '10px',
        {
          lineHeight: '15px',
          letterSpacing: '0px',
          fontWeight: '400'
        }
      ],
      t10: [
        '18px',
        {
          lineHeight: '20px',
          letterSpacing: '-0.1px',
          fontWeight: '700'
        }
      ],
      t11: [
        '13px',
        {
          lineHeight: '15px',
          letterSpacing: '-0.1px',
          fontWeight: '700'
        }
      ],
      t12: [
        '13px',
        {
          lineHeight: '20px',
          letterSpacing: '-0.1px',
          fontWeight: '500'
        }
      ],
      t13: [
        '13px',
        {
          lineHeight: '20px',
          letterSpacing: '-0.1px',
          fontWeight: '200'
        }
      ],
      t14: [
        '18px',
        {
          lineHeight: '26px',
          letterSpacing: '-0.2px',
          fontWeight: '800'
        }
      ],
      t15: [
        '15px',
        {
          lineHeight: '22px',
          fontWeight: '400'
        }
      ],
      t16: [
        '9px',
        {
          lineHeight: '18px',
          fontWeight: '600'
        }
      ],
      t17: [
        '25px',
        {
          lineHeight: '36px',
          letterSpacing: '-0.3px',
          fontWeight: '800'
        }
      ],
      t18: [
        '24px',
        {
          lineHeight: '20px',
          letterSpacing: '-0.1px',
          fontWeight: '200'
        }
      ]
    }
  },
  plugins: [
    typography,
    /**
     * Adds a custom variant 'focus-visible-within' to the CSS rules.
     *
     * @param {Object} addVariant - Function to add a new variant.
     */
    ({ addVariant }) => {
      /**
       * Defines the 'focus-visible-within' variant.
       *
       * @param {Object} container - The HTML element holding the CSS rules.
       */
      addVariant('focus-visible-within', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.focus-visible-within\\:${rule.selector.slice(1)}:has(:focus-visible)`
        })
      })
    },

    /**
     * Add this Firefox variant
     * @example
     * <!-- To style an element with an bg color of red -->
     * <div className="firefox:bg-red-500"> ... </div>
     */
    ({ addVariant }) => {
      // Only Firefox supports -moz-appearance, so wrap rules with @supports
      addVariant('firefox', '@supports (-moz-appearance: none)')
    },

    /**
     * Generates utility classes for animation duration.
     * @example
     * <!-- To style an element with an animation duration of 300ms -->
     * <div class="animate-duration-300"> ... </div>
     * @param {Object} matchUtilities - A function that generates utility classes
     * @param {Object} theme - A theme object that contains the animation durations
     * @returns {void}
     */
    ({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animate-duration': (value) => ({
            animationDuration: value
          })
        },
        { values: theme('transitionDuration') }
      )
    },
    /**
     * Generates utility classes for animation delay.
     * @example
     * <!-- To style an element with an animation delay of 300ms -->
     * <div class="animate-delay-300"> ... </div>
     * @param {Object} matchUtilities - A function that generates utility classes
     * @param {Object} theme - A theme object that contains the animation delays
     * @returns {void}
     */
    ({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value
          })
        },
        { values: theme('transitionDelay') }
      )
    },
    /**
     * Generates utility classes for animation timing function.
     * @example
     * <!-- To style an element with an animation timing function -->
     * <div class="animate-ease-linear"> ... </div>
     * @param {Object} matchUtilities - A function that generates utility classes
     * @param {Object} theme - A theme object that contains the animation timing functions
     * @returns {void}
     */
    ({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animate-ease': (value) => ({
            animationTimingFunction: value
          })
        },
        { values: theme('transitionTimingFunction') }
      )
    },
    /**
     * Plugin to add additional utilities for SVG Paths.
     */
    ({ addUtilities, theme }) => {
      const colors = theme('colors')
      const transitionProperty = theme('transitionProperty')
      const transitionDuration = theme('transitionDuration')
      const transitionTimingFunction = theme('transitionTimingFunction')
      const transitionDelay = theme('transitionDelay')

      const newUtilities = {}

      // * Add stroke color utilities
      Object.keys(colors).forEach((colorName) => {
        if (typeof colors[colorName] === 'object') {
          Object.keys(colors[colorName]).forEach((shade) => {
            const className = `svg-path-stroke-${colorName}-${shade}`
            newUtilities[`.${className}`] = {
              path: {
                stroke: colors[colorName][shade]
              }
            }
          })
        } else {
          const className = `svg-path-stroke-${colorName}`
          newUtilities[`.${className}`] = {
            path: {
              stroke: colors[colorName]
            }
          }
        }
      })

      // * Add transition property utilities
      Object.keys(transitionProperty).forEach((key) => {
        const className = `svg-path-transition-${key}`
        newUtilities[`.${className}`] = {
          path: {
            transitionProperty: transitionProperty[key]
          }
        }
      })

      // * Add transition duration utilities
      Object.keys(transitionDuration).forEach((key) => {
        const className = `svg-path-duration-${key}`
        newUtilities[`.${className}`] = {
          path: {
            transitionDuration: transitionDuration[key]
          }
        }
      })

      // * Add transition timing function utilities
      Object.keys(transitionTimingFunction).forEach((key) => {
        const className = `svg-path-timing-${key}`
        newUtilities[`.${className}`] = {
          path: {
            transitionTimingFunction: transitionTimingFunction[key]
          }
        }
      })

      // * Add transition delay utilities
      Object.keys(transitionDelay).forEach((key) => {
        const className = `svg-path-delay-${key}`
        newUtilities[`.${className}`] = {
          path: {
            transitionDelay: transitionDelay[key]
          }
        }
      })

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
    tailwindCssAnimate
  ]
}
