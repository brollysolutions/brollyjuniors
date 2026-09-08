import { useState } from 'react';
import { Link } from 'react-router-dom';
import { site, address, formattedAddress } from '../data/site.js';
import {
  SectionHead,
  QuickAnswer,
  StageTrack,
  Pillars,
  FaqList,
  CtaBand,
} from '../components/Shared.jsx';
import TrialForm from '../components/TrialForm.jsx';
import { TrickCard, NumberedRows } from '../components/ProgramBits.jsx';

/* The chess programme page.
 *
 * Ported from the standalone chess-classes-for-kids build — the fourth file
 * from that template. The worked hero example and the numbered stage rows come
 * from components/ProgramBits.jsx, shared with brain games, Vedic maths and
 * mental maths. The source's own header, footer and type scale did not come
 * across; everything here inherits the site type roles from global.css.
 *
 * Two things are chess-specific and live in this file: the piece explorer, and
 * the knight-move hunt that stands in for the multiple-choice quiz its sibling
 * pages use. Both are worth keeping — a child who has found all eight knight
 * squares themselves has learned the move in a way no list of bullet points
 * would have taught them.
 *
 * As on the sibling pages, the source's four "suggested learning stages"
 * carried its own note saying they are not published level names, so the real
 * four-level curriculum from data/catalog/programmes.js renders as the
 * curriculum and the stages follow as sequencing. Contact details come from
 * data/site.js rather than the numbers hardcoded in the source.
 */

/* --------------------------------------------------------------------------
 * Board helpers.
 *
 * Five squares rather than eight: on a phone a real board turns each square
 * into something too small to tap, and the point here is to show the shape of
 * a move, which a 5×5 window does perfectly well. The piece always starts in
 * the centre.
 * ------------------------------------------------------------------------ */

const N = 5;
const CENTRE = 2;

const STRAIGHT = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const DIAGONAL = [
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];

const inBoard = (r, c) => r >= 0 && r < N && c >= 0 && c < N;
const key = (r, c) => `${r}-${c}`;

/* One step in each direction. */
function steps(dirs) {
  return dirs.map(([dr, dc]) => [CENTRE + dr, CENTRE + dc]).filter(([r, c]) => inBoard(r, c));
}

/* Every square along each direction until the edge — how the sliding pieces
   move. */
function rays(dirs) {
  const out = [];
  for (const [dr, dc] of dirs) {
    let r = CENTRE + dr;
    let c = CENTRE + dc;
    while (inBoard(r, c)) {
      out.push([r, c]);
      r += dr;
      c += dc;
    }
  }
  return out;
}

const KNIGHT_DIRS = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];

const KNIGHT_SQUARES = steps(KNIGHT_DIRS);

const PIECES = [
  {
    id: 'king',
    glyph: '♚',
    name: 'King',
    text: 'Moves one square in any direction — forward, back, sideways or diagonally. It is the piece the whole game is about, so it is kept safe rather than sent out to fight.',
    moves: steps([...STRAIGHT, ...DIAGONAL]),
    captures: [],
  },
  {
    id: 'queen',
    glyph: '♛',
    name: 'Queen',
    text: 'Moves any number of squares in a straight line or a diagonal. It is the most powerful piece, which is exactly why children are taught not to bring it out too early.',
    moves: rays([...STRAIGHT, ...DIAGONAL]),
    captures: [],
  },
  {
    id: 'rook',
    glyph: '♜',
    name: 'Rook',
    text: 'Moves in straight lines only — up, down or across, as far as the path is clear. Two rooks working along the same line are much stronger than two rooks apart.',
    moves: rays(STRAIGHT),
    captures: [],
  },
  {
    id: 'bishop',
    glyph: '♝',
    name: 'Bishop',
    text: 'Moves diagonally, as far as the path is clear. Each bishop stays on its starting colour for the whole game, so the two bishops together cover both colours.',
    moves: rays(DIAGONAL),
    captures: [],
  },
  {
    id: 'knight',
    glyph: '♞',
    name: 'Knight',
    text: 'Moves in an L shape: two squares in one direction, then one square to the side. It is the only piece that can jump over other pieces.',
    moves: KNIGHT_SQUARES,
    captures: [],
  },
  {
    id: 'pawn',
    glyph: '♟',
    name: 'Pawn',
    text: 'Moves one square forward, or two on its very first move. It captures diagonally rather than straight ahead — the one piece that moves and takes in different directions.',
    moves: [
      [CENTRE - 1, CENTRE],
      [CENTRE - 2, CENTRE],
    ].filter(([r, c]) => inBoard(r, c)),
    captures: [
      [CENTRE - 1, CENTRE - 1],
      [CENTRE - 1, CENTRE + 1],
    ].filter(([r, c]) => inBoard(r, c)),
  },
];

function PieceExplorer() {
  const [activeId, setActiveId] = useState('knight');
  const piece = PIECES.find((p) => p.id === activeId);

  const moveSet = new Set(piece.moves.map(([r, c]) => key(r, c)));
  const capSet = new Set(piece.captures.map(([r, c]) => key(r, c)));

  return (
    <div className="chess-explorer">
      <div>
        <div className="chess-picks" role="group" aria-label="Choose a chess piece">
          {PIECES.map((p) => (
            <button
              key={p.id}
              type="button"
              className="chess-pick"
              aria-pressed={activeId === p.id}
              onClick={() => setActiveId(p.id)}
            >
              <b aria-hidden="true">{p.glyph}</b>
              <span>{p.name}</span>
            </button>
          ))}
        </div>

        <div className="panel" style={{ marginTop: 24 }}>
          <h3>{piece.name}</h3>
          <p>{piece.text}</p>
          <div className="chess-key">
            <span>
              <i className="is-move" /> Can move here
            </span>
            {piece.captures.length > 0 && (
              <span>
                <i className="is-cap" /> Can capture here
              </span>
            )}
            <span>
              <i className="is-start" /> Starting square
            </span>
          </div>
        </div>
      </div>

      <div>
        <div
          className="chess-board"
          role="img"
          aria-label={`A five-by-five board section showing where the ${piece.name.toLowerCase()} can move from the centre square. ${piece.text}`}
        >
          {Array.from({ length: N }, (_, r) =>
            Array.from({ length: N }, (_, c) => {
              const isCentre = r === CENTRE && c === CENTRE;
              const k = key(r, c);
              const state = isCentre
                ? 'is-start'
                : capSet.has(k)
                  ? 'is-cap'
                  : moveSet.has(k)
                    ? 'is-move'
                    : '';
              return (
                <div
                  key={k}
                  className={`chess-sq ${(r + c) % 2 === 0 ? 'is-light' : 'is-dark'} ${state}`}
                >
                  {isCentre && <span aria-hidden="true">{piece.glyph}</span>}
                </div>
              );
            })
          )}
        </div>
        <p className="note-line center">A five-by-five section of a chessboard, for clarity.</p>
      </div>
    </div>
  );
}

/* The knight hunt.
 *
 * The sibling pages use a multiple-choice quiz here. Chess earns something
 * better: finding the eight squares yourself teaches the move, whereas picking
 * the right answer from three options mostly teaches you to guess.
 */
function KnightHunt() {
  const [found, setFound] = useState([]);
  const [missed, setMissed] = useState([]);
  const [revealed, setRevealed] = useState(false);
  /* Whether the *last* tap was a miss, rather than whether any tap ever was —
     otherwise the "not that one" nudge stays on screen through the next four
     correct answers and reads as though they were wrong too. */
  const [lastWasMiss, setLastWasMiss] = useState(false);

  const targets = new Set(KNIGHT_SQUARES.map(([r, c]) => key(r, c)));
  const complete = found.length === KNIGHT_SQUARES.length;

  function tap(r, c) {
    if (revealed || complete) return;
    const k = key(r, c);
    if (r === CENTRE && c === CENTRE) return;
    if (found.includes(k) || missed.includes(k)) return;
    if (targets.has(k)) {
      setFound((f) => [...f, k]);
      setLastWasMiss(false);
    } else {
      setMissed((m) => [...m, k]);
      setLastWasMiss(true);
    }
  }

  function reset() {
    setFound([]);
    setMissed([]);
    setRevealed(false);
    setLastWasMiss(false);
  }

  return (
    <div className="chess-hunt">
      <p className="chess-hunt-score">
        {revealed
          ? 'All eight squares shown'
          : `Found ${found.length} of ${KNIGHT_SQUARES.length}`}
      </p>

      <div
        className="chess-board"
        role="group"
        aria-label="Chessboard challenge: find every square the knight can move to"
      >
        {Array.from({ length: N }, (_, r) =>
          Array.from({ length: N }, (_, c) => {
            const k = key(r, c);
            const isCentre = r === CENTRE && c === CENTRE;
            const isFound = found.includes(k) || (revealed && targets.has(k));
            const isMissed = missed.includes(k);
            const state = isCentre ? 'is-start' : isFound ? 'is-move' : isMissed ? 'is-cap' : '';
            return (
              <button
                key={k}
                type="button"
                className={`chess-sq ${(r + c) % 2 === 0 ? 'is-light' : 'is-dark'} ${state}`}
                disabled={isCentre || revealed || complete}
                aria-label={
                  isCentre
                    ? 'The knight'
                    : `Row ${r + 1}, column ${c + 1}${isFound ? ' — correct' : isMissed ? ' — not a knight move' : ''}`
                }
                onClick={() => tap(r, c)}
              >
                {isCentre ? <span aria-hidden="true">♞</span> : isFound ? '✓' : isMissed ? '✗' : ''}
              </button>
            );
          })
        )}
      </div>

      <p className="chess-hunt-fb" role="status" aria-live="polite">
        {complete
          ? 'That is all eight. From the middle of a board a knight always has eight squares — which is why it is at its worst in a corner.'
          : lastWasMiss && !revealed
            ? 'Not that one. Remember: two squares one way, then one square to the side.'
            : ''}
      </p>

      <div className="btn-row" style={{ justifyContent: 'center' }}>
        <button className="btn btn-outline" type="button" onClick={reset}>
          Start again
        </button>
        {!complete && !revealed && (
          <button className="btn btn-outline" type="button" onClick={() => setRevealed(true)}>
            Show the answer
          </button>
        )}
      </div>
    </div>
  );
}

/* ------------------------------- content ---------------------------------- */

const TRICK_STEPS = [
  <>
    The knight is the only piece that can <strong>jump over</strong> others.
  </>,
  <>
    It moves in an <strong>L shape</strong>: two squares one way, then one square to the side.
  </>,
  <>
    It always lands on a square of the <strong>opposite colour</strong> to the one it started on.
  </>,
  <>
    From the middle of the board it has <strong>eight</strong> squares to choose from.
  </>,
];

const TRUST = [
  { title: 'Chess fundamentals', text: 'Board, pieces and rules taught properly from the very first session.' },
  { title: 'Strategy practice', text: 'Children learn to plan a move ahead rather than react to the last one.' },
  { title: 'Problem solving', text: 'Puzzles and positions that ask a child to find the best move.' },
  { title: 'Focused learning', text: 'A game rewards sitting with a problem, which is practice in itself.' },
];

const ANSWER_ROWS = [
  {
    tag: 'Simple explanation',
    text: 'Chess is a game between two players on a board of 64 squares. Each player has six kinds of piece, and each kind moves in its own way. Players take turns, and the aim is to trap the other player’s king so it cannot escape.',
  },
  {
    tag: 'Easy example',
    text: 'The rook moves in straight lines — up, down or across. The bishop moves diagonally. The knight jumps in an L shape and is the only piece that can hop over others. Children learn one piece at a time, with a demonstration for each.',
  },
  {
    tag: 'At Brolly Juniors',
    text: 'One idea per session, shown on the board, with guided practice before a child plays. Book a free trial to see how your child takes to it.',
  },
];

const WHAT_IT_GIVES = [
  'A game with clear rules that reward thinking ahead',
  'Practice at comparing options before choosing one',
  'A safe place to make a mistake and see why it went wrong',
  'Something they can play with friends and family for life',
];

const WONT_CLAIM = [
  'That chess makes every child smarter',
  'That it guarantees better marks at school',
  'That progress happens on a fixed timetable',
  'That a child will enjoy it — some do, some do not, and the trial tells you which',
];

const WHY_LEARN = [
  {
    title: 'Strategic thinking',
    text: 'A good move is not the one that looks best right now — it is the one that leaves you better placed in three moves. Chess asks children to hold that longer view.',
  },
  {
    title: 'Problem solving',
    text: 'Every position is a small puzzle with several possible answers. Children practise reading the situation, comparing options and committing to one.',
  },
  {
    title: 'Focus',
    text: 'Attention drifts and you lose a piece. Chess builds sustained concentration because the consequence of losing it is immediate and visible.',
  },
  {
    title: 'Patience',
    text: 'The game rewards children who wait and think over children who move quickly. Very few activities give that lesson so directly.',
  },
  {
    title: 'Planning',
    text: 'Children learn to set up a move before making it, which is a habit that shows up well outside the board.',
  },
  {
    title: 'Decision making and confidence',
    text: 'Every turn is a decision a child owns. Making hundreds of them, seeing the results, and adjusting is how confidence gets built.',
  },
];

const BUILDS = [
  { icon: '♛', title: 'Strategic thinking', text: 'Choosing moves that improve a position rather than only reacting to the last move played.' },
  { icon: '🧩', title: 'Problem solving', text: 'Reading a position, weighing several options, and picking the one that holds up.' },
  { icon: '👁️', title: 'Focus', text: 'Staying with a game long enough to notice what the other player is threatening.' },
  { icon: '🗺️', title: 'Planning', text: 'Setting up an idea over several moves instead of hoping something turns up.' },
  { icon: '⏳', title: 'Patience', text: 'Waiting for the right moment, which chess teaches more directly than almost anything else.' },
  { icon: '⚖️', title: 'Decision making', text: 'Committing to a choice, seeing how it turns out, and learning from the result.' },
  { icon: '🔎', title: 'Logical thinking', text: 'Following a chain of consequences: if I move here, they can do that, and then what?' },
  { icon: '🔷', title: 'Pattern recognition', text: 'Spotting shapes that repeat — a familiar checkmate, a familiar trap — and acting on them.' },
];

const FUNDAMENTALS = [
  { title: 'The chessboard', text: '64 squares in eight rows and eight columns. Children learn how to set the board up the right way round and how to name a square.' },
  { title: 'The chess pieces', text: 'King, queen, rook, bishop, knight and pawn — what each looks like, where it starts, and roughly how valuable it is.' },
  { title: 'Piece movement', text: 'How each of the six pieces travels across the board, practised one piece at a time until it needs no thought.' },
  { title: 'Capturing', text: 'How a piece takes an opponent’s piece by moving onto its square, and why a capture is not always the best move available.' },
  { title: 'Taking turns', text: 'One move each, no skipping. Children learn to use the opponent’s turn to think rather than to wait.' },
  { title: 'Check', text: 'What it means when a king is under attack, and the three ways to answer it: move, block, or capture the attacker.' },
  { title: 'Checkmate', text: 'How a game is won, plus the simple checkmate patterns children practise as puzzles before using them in play.' },
  { title: 'Basic rules', text: 'Castling, pawn promotion, stalemate and draws — introduced once the core movement is comfortable.' },
  { title: 'Simple tactics and strategy', text: 'Forks, pins and other repeating patterns, along with early ideas about controlling the centre and developing pieces.' },
];

const STAGES = [
  {
    title: 'Chess basics',
    text: 'Board orientation, the names of the pieces, where everything starts, and how to read a square. Nothing is assumed — a child who has never seen a chessboard begins comfortably here.',
    example: 'Setting up the board correctly from an empty board, against the clock.',
    skill: 'Familiarity with the board and confidence to begin.',
    skillLabel: 'Skill developed',
  },
  {
    title: 'Piece movement & rules',
    text: 'Each piece is taught separately and practised until it needs no thought. Capturing, check, checkmate, stalemate, castling and pawn promotion are added as the movement becomes automatic.',
    example: 'Moving a knight from one corner to another in the fewest jumps.',
    skill: 'Accurate movement and rule confidence.',
    skillLabel: 'Skill developed',
  },
  {
    title: 'Tactics & simple strategies',
    text: 'Children start recognising patterns rather than calculating everything from scratch. Forks, pins and simple checkmate patterns, plus early ideas about controlling the centre and getting pieces into the game.',
    example: 'Puzzle sets where the task is to find one winning move in a set position.',
    skill: 'Pattern recognition and calculation.',
    skillLabel: 'Skill developed',
  },
  {
    title: 'Game practice & strategy',
    text: 'Full games with a plan behind them, followed by review. Children learn to explain why they chose a move and to spot the moment a game turned — which is where most of the improvement actually happens.',
    example: 'Playing a game, then walking back through it to find the turning point.',
    skill: 'Planning, self-review and strategic judgement.',
    skillLabel: 'Skill developed',
  },
];

const AGE_BANDS = [
  {
    title: 'Ages 6–8',
    kv: 'Chess awareness & basic pieces',
    text: 'Getting to know the board and the pieces through short activities and movement games. Sessions stay hands-on, and a full game comes later rather than on day one.',
  },
  {
    title: 'Ages 8–11',
    kv: 'Rules, tactics & guided games',
    text: 'The full rules, simple tactical patterns, and regular guided games where a coach can point out what was missed while the position is still on the board.',
  },
  {
    title: 'Ages 11–14',
    kv: 'Strategy, analysis & advanced practice',
    text: 'Longer games with a plan, harder puzzle sets, and reviewing completed games to work out where the position turned and why.',
  },
];

const SKILLS = [
  { title: 'Strategic thinking', text: 'Choosing a move for what it sets up later, not only for what it does right now.' },
  { title: 'Problem solving', text: 'Working out what a position needs before deciding which piece to touch.' },
  { title: 'Focus', text: 'Holding attention on a game long enough to see what the opponent is planning.' },
  { title: 'Planning', text: 'Building an idea across several moves instead of playing one move at a time.' },
  { title: 'Patience', text: 'Waiting for the right moment rather than forcing something that is not there.' },
  { title: 'Decision making', text: 'Committing to a choice and taking responsibility for how it turns out.' },
  { title: 'Logical thinking', text: 'Following a chain of consequences several steps forward before moving.' },
  { title: 'Pattern recognition', text: 'Recognising a shape on the board because it has come up before, and knowing what to do.' },
];

const METHOD_STEPS = [
  { title: 'Learn the concept', text: 'The idea is explained in plain language, with the reason behind it made clear from the start.' },
  { title: 'See the move', text: 'It is demonstrated on the board, slowly, with questions invited at every stage.' },
  { title: 'Practise with guidance', text: 'Children try it on set positions while support is available, so mistakes get corrected as they happen.' },
  { title: 'Play a mini game', text: 'A short game using the new idea, which is how a rule turns into something a child actually owns.' },
  { title: 'Review the position', text: 'The game is walked back through together to find where it turned and what was missed.' },
  { title: 'Improve the strategy', text: 'The idea returns in later sessions in harder positions, so it keeps being practised rather than ticked off.' },
];

const SESSION_FLOW = [
  { title: 'Welcome', text: 'A short warm-up puzzle that revisits what was covered last time.' },
  { title: 'Chess concept', text: 'The new idea is introduced, with the reasoning behind it explained.' },
  { title: 'Board demonstration', text: 'The idea is shown on the board move by move, with questions welcome.' },
  { title: 'Guided practice', text: 'Children work through set positions while support is close at hand.' },
  { title: 'Mini chess challenge', text: 'A puzzle or short task that uses the day’s idea in a different shape.' },
  { title: 'Game practice', text: 'Children play, which is where the learning gets tested for real.' },
  { title: 'Review', text: 'A quick look back at the games and what to practise before next time.' },
];

const ACTIVITIES = [
  { icon: '♞', title: 'Piece movement challenges', text: 'Tasks like moving a knight across the board in the fewest jumps, until movement is automatic.' },
  { icon: '🧩', title: 'Chess puzzles', text: 'Set positions where one move is clearly best, and the task is to find it and explain why.' },
  { icon: '♚', title: 'Checkmate puzzles', text: 'Simple mating patterns practised as puzzles before they are ever needed in a real game.' },
  { icon: '🎯', title: 'Mini games', text: 'Short games with fewer pieces, so a child gets many decisions in a small amount of time.' },
  { icon: '🚩', title: 'Strategy challenges', text: 'Positions where the task is to form a plan rather than to find a single winning move.' },
  { icon: '▦', title: 'Board exercises', text: 'Setting up, naming squares and finding pieces quickly — the groundwork everything else sits on.' },
  { icon: '🔷', title: 'Pattern recognition', text: 'Spotting familiar shapes such as forks and pins across many different positions.' },
  { icon: '↺', title: 'Game review', text: 'Walking back through a finished game to find the moment it turned — where most improvement happens.' },
];

const BEGINNER_START = [
  'Board orientation — setting it up the right way round',
  'Piece names and where each one starts',
  'How each piece moves, taught one at a time',
  'The basic rules, including capturing and check',
  'Simple positions to practise on',
  'A first guided game, with support throughout',
];

const WHY_US = [
  { icon: '🎯', title: 'Built for children, not adults', text: 'Everything is pitched at how children actually learn — short explanations, plenty of demonstration, and practice broken into pieces that hold attention.' },
  { icon: '🪜', title: 'Step-by-step teaching', text: 'One idea per session, shown before it is explained, and never more than a child can absorb in one sitting.' },
  { icon: '♟️', title: 'Learning through play', text: 'Children play in every session. Chess is a game, and it is learned fastest by playing it rather than by being told about it.' },
  { icon: '✋', title: 'Guided practice', text: 'Support is available while children play, so a mistake gets explained while the position is still on the board.' },
  { icon: '❤️', title: 'Parent-friendly approach', text: 'We tell you what your child is working on and what would help at home, in plain terms and without jargon.' },
  { icon: '🧠', title: 'Understanding over winning', text: 'A child who can explain a losing move has learned more than one who won without knowing why.' },
];

const DEMO_INCLUDES = [
  'Your child learns and practises an actual chess idea',
  'We see what they already know, if anything',
  'You get a suggested starting point for your child',
  'Timings, learning modes and fees are explained clearly',
  'No obligation to enrol afterwards',
];

const PARENT_SUPPORT = [
  { title: 'What your child is learning', text: 'Which concepts have been covered and roughly where your child is in the sequence.' },
  { title: 'Which chess skills they are practising', text: 'Whether the current focus is piece movement, tactics, planning or game review.' },
  { title: 'Where more practice would help', text: 'The specific thing your child keeps missing — often one pattern that a few puzzles would fix.' },
  { title: 'How to encourage at home', text: 'Simple, short things you can do between sessions, none of which require you to play well yourself.' },
];

const HOME_GUIDE = [
  { title: 'Let them practise regularly', text: 'Fifteen minutes a few times a week beats a long session on Sunday. Short and frequent is what builds familiarity.' },
  { title: 'Play simple games together', text: 'You do not have to win or even play well. A parent who is willing to sit down and play is worth more than a strong opponent.' },
  { title: 'Ask them to explain their move', text: '“Why did you go there?” is the single most useful question. Explaining out loud is how a child finds the gaps in their own thinking.' },
  { title: 'Encourage thinking before moving', text: 'A gentle “are you sure?” before a move is made teaches more than pointing out the mistake afterwards.' },
  { title: 'Use simple chess puzzles', text: 'A puzzle or two a day keeps pattern recognition ticking over and takes almost no time.' },
  { title: 'Celebrate effort, not just wins', text: 'Praise the good move in a lost game. Children who only hear about results stop taking interesting risks.' },
  { title: 'Avoid pressure', text: 'Losing is most of how chess is learned. A child who dreads losing will avoid playing, and then nothing improves.' },
];

const FAQS = [
  {
    q: 'What are chess classes for kids?',
    a: 'They teach children to play from the beginning: how the board is set up, how each piece moves, the basic rules, and how to think a move ahead. Learning happens through demonstrations, puzzles and guided games rather than lectures.',
  },
  {
    q: 'Why should children learn chess?',
    a: 'It gives children regular practice at planning, weighing options and living with the result of a decision. It also builds patience, because the game rewards thinking before moving. How much a child gains depends on how often they play and review their games.',
  },
  {
    q: 'What age can kids start chess classes?',
    a: 'The Brolly Juniors programme runs from ages 6 to 14. Children can usually start once they can follow simple rules and sit with a task for a short stretch — the starting point is set from what a child can already do rather than age alone.',
  },
  {
    q: 'Can beginners join?',
    a: 'Yes. Beginners are expected. Children who have never touched a chessboard start with board orientation and piece names, and no prior knowledge is assumed at any point.',
  },
  {
    q: 'What do children learn in chess classes?',
    a: 'The chessboard, the names and movement of each piece, capturing, taking turns, check and checkmate, the basic rules, simple tactics, and how to plan during a game. Later levels add opening principles, endgame technique and tournament play.',
  },
  {
    q: 'Do kids learn how the chess pieces move?',
    a: 'Yes, and it is one of the first things covered. Each piece is introduced separately with a demonstration on the board, then practised through movement challenges until a child can use it without hesitating.',
  },
  {
    q: 'Do children learn chess tactics?',
    a: 'Yes. Once piece movement and the basic rules are secure, children move on to tactical patterns and puzzles that ask them to spot the best move in a position. Tactics are drilled every week.',
  },
  {
    q: 'Do kids learn check and checkmate?',
    a: 'Yes. Check, checkmate and stalemate are covered as part of the basic rules, and children practise simple checkmate patterns as puzzles before using them in games.',
  },
  {
    q: 'Can chess help children develop problem-solving skills?',
    a: 'It gives children repeated practice at reading a situation, comparing options and choosing one. That is problem solving in a form children enjoy, though how much transfers to other areas varies from child to child.',
  },
  {
    q: 'Is chess useful for school students?',
    a: 'Many parents find it useful because it asks for sustained attention and thinking ahead. We would not claim it improves marks, but it is a structured way to practise focus and patience.',
  },
  {
    q: 'Do children play in every session?',
    a: 'Yes. Tactics are drilled, games are played and games are reviewed — in that order, every week. Every batch ends the term with an internal tournament, and each child leaves with annotated games.',
  },
  {
    q: 'Does my child need their own chessboard?',
    a: 'A board at home is helpful for practice but is not needed to start. Boards are provided in class.',
  },
  {
    q: 'How much do chess classes cost in Hyderabad?',
    a: 'Fees depend on the batch and the duration enrolled for, so we share them directly rather than publishing a number that goes stale. Nothing is payable before the free trial.',
  },
  {
    q: 'Are chess classes available near me?',
    a: 'The Brolly Juniors centre is at Nizampet X Roads, Hyderabad. Tell us your area and preferred timing and we will confirm which batch is currently open.',
  },
  {
    q: 'How do I book a free chess trial?',
    a: 'Use the form on this page, call us, or message us on WhatsApp. Tell us your child’s age and whether they have played before, so the trial starts at the right point.',
  },
];

const QUICK_ANSWERS = [
  {
    q: 'What are chess classes for kids?',
    a: 'Classes that teach children to play from scratch — the board, the pieces, how each one moves, the rules, and how to think ahead. Sessions use demonstrations, puzzles and guided games so children learn by playing.',
  },
  {
    q: 'Why is chess useful for children?',
    a: 'It gives repeated practice at planning, comparing options and accepting the result of a decision. It also rewards patience directly, because moving quickly usually costs you something on the very next turn.',
  },
  {
    q: 'What do kids learn in chess classes?',
    a: 'The chessboard, the six pieces and how each moves, capturing, taking turns, check and checkmate, the basic rules, tactics such as forks and pins, and how to plan during a game.',
  },
  {
    q: 'At what age can children start?',
    a: 'The programme runs ages 6 to 14. Children can usually start once they can follow simple rules and stay with a task for a short stretch.',
  },
  {
    q: 'Can beginners join?',
    a: 'Yes. Most children who join have never played. Beginners start with board orientation and piece names, then learn each piece separately, and play their first guided game only once movement is comfortable.',
  },
  {
    q: 'Where can I find chess classes in Hyderabad?',
    a: 'At the Brolly Juniors centre at Nizampet X Roads. Book a free trial through the form on this page.',
  },
];

const RELATED = [
  { icon: '🔢', title: 'Mental maths', text: 'Calculating in the head using flexible strategies — the same habit of weighing options before committing.', to: '/programs/mental-maths' },
  { icon: '➗', title: 'Vedic maths', text: 'Shortcut techniques built on spotting patterns, much like recognising shapes on a board.', to: '/junior-skills/vedic-maths' },
  { icon: '🧮', title: 'Abacus', text: 'Bead-based calculation that builds visualisation and concentration.', to: '/junior-skills/abacus' },
  { icon: '🧩', title: 'Brain games', text: 'Broader thinking practice — memory, logic, patterns and strategy in short bursts.', to: '/programs/brain-games' },
  { icon: '💻', title: 'Coding', text: 'Logical sequencing and step-by-step thinking, built through projects children make themselves.', to: '/programs/coding' },
  { icon: '🤖', title: 'Robotics', text: 'Hands-on building and problem solving that puts logical thinking into a physical, visible form.', to: '/programs/robotics' },
];

export default function ChessPage({ page }) {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>Chess classes for kids in Hyderabad</h1>
              <p className="section-lead">
                Children learn chess step by step. They start with the board and the pieces, practise
                how each one moves, learn the rules properly, and build up to playing thoughtful games
                where every move has a reason behind it.
              </p>
              <div className="btn-row">
                <Link to="/book-free-demo" className="btn btn-primary">
                  Book a free trial
                </Link>
                <a href="#pieces" className="btn btn-outline">
                  Meet the pieces
                </a>
              </div>
              <ul className="tick-row">
                <li>
                  <span className="tick">★</span> Nizampet X Roads, Hyderabad
                </li>
                <li>
                  <span className="tick">★</span> Beginners welcome
                </li>
                <li>
                  <span className="tick">★</span> Guided game practice
                </li>
              </ul>
            </div>
            <TrickCard
              label="First lesson: how the knight moves"
              sum="♞  →"
              answer="8 squares"
              steps={TRICK_STEPS}
              note="Every piece is introduced this way — slowly, with a reason."
              showLabel="Show me the steps"
              hideLabel="Hide the steps"
            />
          </div>
        </div>
      </section>

      {/* ---------- Trust strip ---------- */}
      <section className="stats-band section-tight">
        <div className="container">
          <div className="ab-statbar">
            {TRUST.map((t) => (
              <div className="stat" key={t.title}>
                <b>{t.title}</b>
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <QuickAnswer text={page.quickAnswer} />
        </div>
      </section>

      {/* ---------- What is chess ---------- */}
      <section id="what-is">
        <div className="container">
          <SectionHead
            eyebrow="The basics"
            title="What is chess for kids?"
            lead="A short, plain-English explanation you can read through with your child."
          />
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose">
              <p>
                Chess is a two-player board game. Each player starts with sixteen pieces lined up on
                opposite sides of a board made of 64 squares, arranged in eight rows and eight columns
                of alternating light and dark.
              </p>
              <p>
                There are six kinds of piece: king, queen, rook, bishop, knight and pawn. Each moves
                differently, and learning those six movements is the whole of the first stage. Nothing
                else makes sense until a child can move every piece without stopping to think.
              </p>
              <p>
                Players take turns, one move each. If a piece lands on a square occupied by an
                opponent&rsquo;s piece, that piece is captured and comes off the board. When a king is
                under direct threat it is in <em>check</em>, and the player must deal with it
                immediately. If there is no legal way to escape, that is <em>checkmate</em> and the game
                ends.
              </p>
              <p>
                Children learn all of this by doing it. A concept is shown on the board, practised on a
                few positions, and then used in a short game the same session — because a rule you have
                used is a rule you remember.
              </p>
            </div>
            <div>
              <div className="panel">
                <h2>What chess gives children</h2>
                <ul className="pill-row">
                  {WHAT_IT_GIVES.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
              <div className="panel" style={{ marginTop: 24 }}>
                <h2>What we will not claim</h2>
                <ul className="pill-row">
                  {WONT_CLAIM.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="quick-answer" style={{ marginTop: 48 }}>
            <h2>The same thing, three ways</h2>
            {ANSWER_ROWS.map((r) => (
              <p key={r.tag}>
                <span className="kv">{r.tag}</span>
                {r.text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Why learn ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="For parents"
            title="Why should kids learn chess?"
            lead="The honest answer: chess is a structured way to practise thinking, and children keep doing it because it is a game rather than an exercise."
          />
          <div className="grid-3">
            {WHY_LEARN.map((c) => (
              <div className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            How much a child gains depends on how often they play and whether they review their games.
            We do not promise improvements in school performance or intelligence — what we commit to is
            structured teaching and regular guided practice.
          </p>
        </div>
      </section>

      {/* ---------- What it builds ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Benefits"
            title="What regular chess practice builds"
            lead="Eight things children work on across the programme."
          />
          <div className="grid-4">
            {BUILDS.map((b) => (
              <div className="card" key={b.title}>
                <span className="icon">{b.icon}</span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Piece explorer ---------- */}
      <section className="band-soft" id="pieces">
        <div className="container">
          <SectionHead
            eyebrow="Interactive"
            title="Meet the chess pieces"
            lead="Tap a piece to see where it can move from the middle of the board. This is exactly how each piece is introduced in class — one at a time, shown before it is explained."
          />
          <PieceExplorer />
        </div>
      </section>

      {/* ---------- Fundamentals ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="The essentials"
            title="Chess fundamentals children learn"
            lead="Everything in this list is covered before a child is asked to play a full game."
          />
          <div className="grid-3">
            {FUNDAMENTALS.map((f) => (
              <div className="card" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Knight hunt ---------- */}
      <section className="band-soft" id="challenge">
        <div className="container center">
          <SectionHead
            eyebrow="Try it together"
            title="Try a quick chess challenge"
            lead="The knight is on the yellow square. Tap every square it can jump to — there are eight. Sit with your child and work them out together."
          />
          <KnightHunt />
        </div>
      </section>

      {/* ---------- The real curriculum ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow={page.curriculum.eyebrow}
            title={page.curriculum.title}
            lead={page.curriculum.lead}
          />
          <StageTrack stages={page.curriculum.stages} />
        </div>
      </section>

      {/* ---------- Learning stages ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Learning stages"
            title="How the learning is sequenced"
            lead="Four stages showing the shape of the journey. Your child’s actual starting point and pace are set after we see where they are — the four levels above are what the batches run to."
          />
          <NumberedRows items={STAGES} badge="Stage" />
        </div>
      </section>

      {/* ---------- Age groups ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Suggested age groups"
            title="Chess learning by age group"
            lead="Suggested groupings, not fixed batches. Learning adapts to the child’s current level, so a younger child who is ready can start earlier and an older beginner still starts from the basics."
          />
          <div className="grid-3">
            {AGE_BANDS.map((a) => (
              <div className="age-card" key={a.title}>
                <h3>{a.title}</h3>
                <p className="kv">{a.kv}</p>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            Not sure where your child fits? That is what the free trial is for — we look at what your
            child already knows and suggest a sensible starting point.
          </p>
          <div className="center" style={{ marginTop: 24 }}>
            <Link to="/book-free-demo" className="btn btn-primary">
              Book a free trial
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Skills ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Skills"
            title="Chess skills children build"
            lead="What each one actually means, in plain language."
          />
          <div className="grid-4">
            {SKILLS.map((s) => (
              <div className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Piece reference ---------- */}
      <section id="piece-guide">
        <div className="container">
          <SectionHead
            eyebrow="Quick reference"
            title="How each chess piece moves"
            lead="The six movements, in the simplest words we can manage. Keep this open while your child practises at home."
          />
          <div className="grid-2">
            {PIECES.map((p) => (
              <div className="chess-pcard" key={p.id}>
                <div className="chess-pcard-glyph" aria-hidden="true">
                  {p.glyph}
                </div>
                <div>
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- How classes work ---------- */}
      <section className="navy-band">
        <div className="container">
          <SectionHead
            eyebrow="The teaching method"
            title="How chess classes work"
            lead="The same six steps are used for every new idea, so children always know what is coming next."
          />
          <div className="steps">
            {METHOD_STEPS.map((s) => (
              <div className="step" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Session shape ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Inside a session"
            title="What a chess class looks like"
            lead="Seven stages, in the same order every time. Children settle quickly when they know what is coming next."
          />
          <ol className="rhythm">
            {SESSION_FLOW.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Activities ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Practice"
            title="Practical chess activities for kids"
            lead="Examples of the kinds of activity used to keep practice varied. Children who enjoy the practice do more of it, and doing more of it is what makes the ideas stick."
          />
          <div className="grid-4">
            {ACTIVITIES.map((a) => (
              <div className="card" key={a.title}>
                <span className="icon">{a.icon}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Beginners ---------- */}
      <section>
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Never played before?</span>
            <h2>Chess classes for beginners</h2>
            <p>
              If your child has never touched a chessboard, that is completely fine. Most children who
              join have not. Nothing in the first sessions assumes any prior knowledge at all.
            </p>
            <p>
              Beginners start with the board itself — which way round it goes and how to name a square.
              Then the pieces, one at a time, each with a demonstration and a short practice task before
              the next one is introduced. The basic rules follow, then simple positions, and only then a
              guided game with support available throughout.
            </p>
            <p>
              Children are never dropped into a full game and left to work it out. They play their first
              game once they can move every piece confidently, and a coach is there while they do it.
            </p>
          </div>
          <div className="panel">
            <h2>What the first sessions cover</h2>
            <ul className="pill-row">
              {BEGINNER_START.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="btn-row">
              <Link to="/book-free-demo" className="btn btn-primary">
                Book a free trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Why us ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="About us"
            title="Why choose Brolly Juniors for chess?"
            lead="Brolly Juniors is a children’s learning centre at Nizampet X Roads, Hyderabad. Chess sits alongside our abacus, Vedic maths, mental maths, coding, robotics and AI programmes."
          />
          <div className="grid-3">
            {WHY_US.map((w) => (
              <div className="card" key={w.title}>
                <span className="icon">{w.icon}</span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
          <div className="quick-answer" style={{ marginTop: 36 }}>
            <h2>Guidance in class</h2>
            <p>
              Children get guided support to understand each idea and practise it step by step.
              Explanations come at the child&rsquo;s pace, mistakes are talked through as they happen,
              and no child is pushed to play faster than they are ready to.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Modes, timings, fees ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Practical details"
            title="Learning modes, timings and fees"
            lead="We share these directly rather than publishing them here, so what you get is current and specific to your child’s level."
          />
          <div className="grid-3">
            <div className="plan">
              <h3>Learning modes</h3>
              <p className="kv">Ask us</p>
              <ul>
                <li>Classroom sessions at the centre</li>
                <li>Online availability varies by term</li>
                <li>We will say honestly which suits your child</li>
              </ul>
              <a href={site.phoneHref} className="btn btn-outline">
                Call {site.phone}
              </a>
            </div>
            <div className="plan">
              <h3>Class timings</h3>
              <p className="kv">Changes through the year</p>
              <ul>
                <li>Weekday, after school</li>
                <li>Weekend batches</li>
                <li>Availability shifts as groups fill</li>
              </ul>
              <a href={site.whatsappHref} className="btn btn-outline" target="_blank" rel="noreferrer">
                Ask on WhatsApp
              </a>
            </div>
            <div className="plan">
              <h3>Chess class fees</h3>
              <p className="kv">Nothing before the trial</p>
              <ul>
                <li>Depends on batch and duration</li>
                <li>We explain what is included first</li>
                <li>Free trial before you decide anything</li>
              </ul>
              <Link to="/book-free-demo" className="btn btn-outline">
                Get fee details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Trial ---------- */}
      <section className="band-soft" id="book-demo">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Free trial</span>
            <h2>Book a free chess trial for your child</h2>
            <p>
              Let your child explore chess through simple concepts, guided practice and strategy
              activities. The trial is a real session, not a sales meeting — your child sits at a board
              and plays.
            </p>
            <ul className="pill-row">
              {DEMO_INCLUDES.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <div className="btn-row">
              <a href={site.whatsappHref} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
                Message us on WhatsApp
              </a>
              <a href={site.phoneHref} className="btn btn-outline">
                Call {site.phone}
              </a>
            </div>
            <p className="note-line">{formattedAddress()}</p>
          </div>
          <div className="trial-panel">
            <h2>Request your free trial</h2>
            <TrialForm program="Chess" compact />
          </div>
        </div>
      </section>

      {/* ---------- Parent support ---------- */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="For parents"
            title="Parent support and progress"
            lead="You should not have to guess what your child is doing in class. Here is what you can expect to understand at any point."
          />
          <div className="grid-4">
            {PARENT_SUPPORT.map((p) => (
              <div className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
          <p className="note-line center" style={{ marginTop: 24 }}>
            Want an update on how your child is getting on? Ask. We will tell you honestly, including
            the parts that still need work.
          </p>
        </div>
      </section>

      {/* ---------- Home guide ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Practical tips"
            title="Parent guide: how to help your child learn chess at home"
            lead="Seven things that make a real difference between sessions. You do not need to be a good chess player for any of them."
          />
          <div className="grid-3">
            {HOME_GUIDE.map((h) => (
              <div className="card" key={h.title}>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Hyderabad ---------- */}
      <section>
        <div className="container split" style={{ alignItems: 'start' }}>
          <div className="prose">
            <span className="eyebrow">Hyderabad</span>
            <h2>Chess classes for kids in Hyderabad</h2>
            <p>
              Brolly Juniors runs its chess classes from a learning centre built around children rather
              than adult coaching. The pace, the explanations and the practice are all pitched for young
              learners.
            </p>
            <p>
              Parents across Hyderabad come to this for different reasons. Some have a child who picked
              up the game at school and wants to get properly good at it. Some are looking for an
              activity that asks for sustained attention without a screen. Both work here, because
              children start from where they actually are rather than from a fixed syllabus point.
            </p>
            <p>
              If you want to see the teaching before committing, the free trial is the simplest way.
              Your child plays, you watch how they take to it, and we talk about a sensible starting
              point.
            </p>
          </div>
          <div className="panel">
            <h2>Visit Brolly Juniors</h2>
            <p>{formattedAddress()}</p>
            <p>{address.landmarks}.</p>
            <div className="btn-row">
              <a href={site.phoneHref} className="btn btn-primary">
                Call {site.phone}
              </a>
              <Link to="/contact" className="btn btn-outline">
                Directions &amp; contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Near me ---------- */}
      <section className="section-tight">
        <div className="container center">
          <SectionHead
            title="Looking for chess classes near you?"
            lead="You are probably weighing two things: whether the centre is close enough to reach on a school night, and whether your child will actually enjoy it. We are at Nizampet X Roads — and the second question is best answered by letting your child sit at a board for an hour."
          />
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <Link to="/book-free-demo" className="btn btn-primary">
              Book a free trial
            </Link>
            <a href={site.whatsappHref} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Related ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Other programmes"
            title="Related programmes at Brolly Juniors"
            lead="Chess pairs naturally with our other reasoning and number programmes. Many families combine it with one of the maths pathways."
          />
          <div className="grid-3">
            {RELATED.map((r) => (
              <Link className="card" to={r.to} key={r.title}>
                <span className="icon">{r.icon}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Pillars />
        </div>
      </section>

      <FaqList items={FAQS} title="Chess classes for kids: frequently asked questions" />

      {/* ---------- Quick answers ---------- */}
      <section className="band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Quick answers"
            title="Chess for kids: quick answers"
            lead="Short, direct answers to the questions parents ask most."
          />
          <div className="grid-3">
            {QUICK_ANSWERS.map((qa) => (
              <div className="ansblock" key={qa.q}>
                <h3>{qa.q}</h3>
                <p>{qa.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand variant={page.cta} />
    </>
  );
}
