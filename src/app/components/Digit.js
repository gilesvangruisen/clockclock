const CLOCK_PROPS = [
  [
    { a: 0, b: 90 },
    { a: 180, b: 90 },
    { a: -90, b: 90 },
    { a: -90, b: 90 },
    { a: -90, b: 0 },
    { a: -90, b: 180 },
  ],
  [
    { a: 135, b: 135 },
    { a: 90, b: 90 },
    { a: 135, b: 135 },
    { a: -90, b: 90 },
    { a: 135, b: 135 },
    { a: -90, b: -90 },
  ],
  [
    { a: 0, b: 0 },
    { a: 180, b: 90 },
    { a: 90, b: 0 },
    { a: -90, b: 180 },
    { a: 0, b: -90 },
    { a: 180, b: 180 },
  ],
  [
    { a: 0, b: 0 },
    { a: 180, b: 90 },
    { a: 0, b: 0 },
    { a: -90, b: 180 },
    { a: 0, b: 0 },
    { a: -90, b: 180 },
  ],
  [
    { a: 90, b: 90 },
    { a: 90, b: 90 },
    { a: -90, b: 0 },
    { a: -90, b: 180 },
    { a: 135, b: 135 },
    { a: -90, b: -90 },
  ],
  [
    { a: 90, b: 0 },
    { a: 180, b: 180 },
    { a: 0, b: -90 },
    { a: 90, b: 180 },
    { a: 0, b: 0 },
    { a: 180, b: -90 },
  ],
  [
    { a: 90, b: 0 },
    { a: 180, b: 180 },
    { a: 90, b: -90 },
    { a: 90, b: 180 },
    { a: -90, b: 0 },
    { a: 180, b: -90 },
  ],
  [
    { a: 0, b: 0 },
    { a: 180, b: 90 },
    { a: 135, b: 135 },
    { a: 90, b: -90 },
    { a: 135, b: 135 },
    { a: -90, b: -90 },
  ],
  [
    { a: 0, b: 90 },
    { a: 180, b: 90 },
    { a: -90, b: 0 },
    { a: -90, b: 180 },
    { a: -90, b: 0 },
    { a: -90, b: 180 },
  ],
  [
    { a: 90, b: 0 },
    { a: 180, b: 90 },
    { a: 0, b: -90 },
    { a: 90, b: -90 },
    { a: 0, b: 0 },
    { a: 180, b: -90 },
  ],
];

const CLOCK_POSITION = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: 1, y: 1 },
  { x: 0, y: 2 },
  { x: 1, y: 2 },
];

const SIZE = 200;
const PAD = 14;
const STROKE = 16;

export default function Digit({ value, x = 0 }) {
  const clocks = CLOCK_PROPS[value];

  return (
    <g style={{ transform: `translate(${x * SIZE * 2}px, 0)` }}>
      {clocks.map((hands, idx) => (
        <Clock key={idx} {...CLOCK_POSITION[idx]} {...hands} />
      ))}
    </g>
  );
}

function Clock({ a = 0, b = 0, x = 0, y = 0 }) {
  return (
    <g
      style={{
        transition: "all 1000ms ease-in-out",
        transform: `translate(${SIZE * x}px, ${SIZE * y}px)`,
      }}
    >
      <g>
        <foreignObject x={PAD / 2} y={PAD / 2} width={SIZE} height={SIZE}>
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            className="rounded-full"
            style={{
              width: SIZE - PAD + "px",
              height: SIZE - PAD + "px",

              boxShadow: "inset -10px 6px 30px -10px rgba(0,0,0,0.4)",
            }}
          />
        </foreignObject>
      </g>
      <g
        style={{
          transition: "all 1000ms ease-in-out",
          transform: `translate(${SIZE / 2}px, ${SIZE / 2}px) rotate(${a}deg)`,
        }}
      >
        <line
          x1={0}
          y1={0}
          x2={SIZE / 2 - PAD - PAD}
          y2={0}
          strokeWidth={STROKE}
          stroke="black"
          strokeLinecap="round"
        />
      </g>
      <g
        style={{
          transition: "all 1000ms ease-in-out",
          transform: `translate(${SIZE / 2}px, ${SIZE / 2}px) rotate(${b}deg)`,
        }}
      >
        <line
          x1={0}
          y1={0}
          x2={SIZE / 2 - PAD - PAD}
          y2={0}
          strokeWidth={STROKE}
          stroke="black"
          strokeLinecap="round"
        />
      </g>
    </g>
  );
}
