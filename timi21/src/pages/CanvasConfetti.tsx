import confetti from "canvas-confetti";

function CanvasConfetti() {
  const shootConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 50,
      origin: { y: 0.6 },
      shape: "star",
    });
  };

  return (
    <div>
      <p>Canvas Confetti Siða</p>
      <button onClick={shootConfetti}>Shoot Confetti</button>
    </div>
  );
}

export default CanvasConfetti;
