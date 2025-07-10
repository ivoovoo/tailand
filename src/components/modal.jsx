import React, { useState } from "react";
import toast from "react-hot-toast";

function Modal({ isModalOpen, setIsModalOpen }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const message = `👤 Имя: ${name}\n📞 Номер телефона: ${phone}`;
    const botToken = "8179911619:AAGYfUcFUGUYnJSqA3eNaJyfW0g9ZL1nPsM";
    const chatId = "-1002722135082";

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
      toast.success("Спасибо!");
      setName("");
      setPhone("");
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Произошла ошибка.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#0000005e] bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-[90%] max-w-md shadow-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-gray-500 text-xl hover:text-red-500"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center font-inter uppercase">
              оставить заявку
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 font-inter"
              />
              <input
                type="number"
                placeholder="Ваш номер телефона"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 font-inter"
              />

              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-[65px] gold_button !text-[20px]"
              >
                {isLoading ? "Отправка..." : "Отправить"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
