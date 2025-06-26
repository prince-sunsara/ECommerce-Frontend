import { useState } from "react";

const PaymentMethods = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([
    {
      id: 1,
      type: "Visa",
      number: "**** **** **** 1234",
      expiry: "12/26",
    },
    {
      id: 2,
      type: "MasterCard",
      number: "**** **** **** 5678",
      expiry: "08/25",
    },
  ]);

  const [newCard, setNewCard] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
    holderName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCard = (e) => {
    e.preventDefault();
    if (
      newCard.cardNumber &&
      newCard.expiry &&
      newCard.cvc &&
      newCard.holderName
    ) {
      const lastFour = newCard.cardNumber.slice(-4);
      const newCardData = {
        id: Date.now(),
        type: "Card",
        number: `**** **** **** ${lastFour}`,
        expiry: newCard.expiry,
      };
      setCards((prev) => [...prev, newCardData]);
      setNewCard({ cardNumber: "", expiry: "", cvc: "", holderName: "" });
    }
  };

  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className="min-h-screen bg-[var(--hero-bg)] text-[var(--text-light)] p-6">
      <div className="max-w-4xl mx-auto bg-[var(--input-bg)] p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-[var(--highlight-color)] mb-6">
          Payment Methods
        </h2>

        {/* Existing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                selectedCard === card.id
                  ? "border-[var(--highlight-color)]"
                  : "border-[var(--border-color)]"
              }`}
              onClick={() => setSelectedCard(card.id)}
            >
              <p className="text-[var(--primary-color)] font-semibold mb-2">
                {card.type}
              </p>
              <p className="mb-1">{card.number}</p>
              <p className="text-sm text-[var(--text-dark-light)]">
                Exp: {card.expiry}
              </p>
              <button
                className="mt-2 text-sm text-red-500 hover:text-red-600"
                onClick={() => handleDelete(card.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Add New Card */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-[var(--primary-color)] mb-4">
            Add New Card
          </h3>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleAddCard}
          >
            <div>
              <label className="block mb-1">Cardholder Name</label>
              <input
                type="text"
                name="holderName"
                value={newCard.holderName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-md bg-[var(--hero-bg)] text-[var(--text-light)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block mb-1">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={newCard.cardNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-md bg-[var(--hero-bg)] text-[var(--text-light)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div>
              <label className="block mb-1">Expiry Date</label>
              <input
                type="text"
                name="expiry"
                value={newCard.expiry}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-md bg-[var(--hero-bg)] text-[var(--text-light)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block mb-1">CVC</label>
              <input
                type="password"
                name="cvc"
                value={newCard.cvc}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-md bg-[var(--hero-bg)] text-[var(--text-light)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
                placeholder="***"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-[var(--highlight-color)] text-[var(--button-text-color)] font-semibold py-2 px-4 rounded-md hover:bg-[var(--primary-hover)] transition"
              >
                Add Card
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
