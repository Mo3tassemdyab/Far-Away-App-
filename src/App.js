// import { useState } from "react";

import { useState } from "react";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackageList";
import Stats from "./Components/Stats";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// function App() {
//   const [step, setStep] = useState(1)

//   function handlePrevious(){
//     if (step > 1) {

//       setStep(step - 1);
//     }
//   }
//   function handleNext(){
//     if (step < 3) {

//       setStep(step + 1);
//     }
//   }

//   return (
//     <>
//       <div className="steps">
//         <div className="numbers">
//           <div className={`${step >= 1 ? "active" : ""}`}>1</div>
//           <div className={`${step >= 2 ? "active" : ""}`}>2</div>
//           <div className={`${step >= 3 ? "active" : ""}`}>3</div>
//         </div>

//         <div className="message">
//           Step {step} : {messages[step - 1]}{" "}
//         </div>
//         <div className="buttons">
//           <button
//             style={{ backgroundColor: "#7950f2", color: "#fff" }}
//             onClick={handlePrevious}
//           >
//             Previous
//           </button>
//           <button
//             style={{ backgroundColor: "#7950f2", color: "#fff" }}
//             onClick={handleNext}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
///============================================================================================

// function App() {
//   return (
//     <>
//       <Counter />
//     </>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

//   const date = new Date("june 21 2027");
//   date.setDate(date.getDate() + count);
//   return (
//     <>
//       <div>
//        <div>
//        <button onClick={() => setStep((c) => c - 1)}> - </button>
//         <span>Step: {step}</span>
//         <button onClick={() => setStep((c) => c + 1)}> + </button>
//        </div>
//        <div>
//        <button onClick={() => setCount((c) => c - step)}> - </button>
//         <span>Count: {count}</span>
//         <button onClick={() => setCount((c) => c + step)}> + </button>
//        </div>

//         <p>
//           <span>
//             {count === 0
//               ? "Today is "
//               : count > 0
//               ? `${count} days from is `
//               : `${Math.abs(count)} days ago was`}
//           </span>
//           <span>{date.toDateString()}</span>
//         </p>
//       </div>
//     </>
//   );
// }

// export default App;

//================================================================================

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList(){

    const confirmed = window.confirm("Are you sure you want to delete all items?")
    if (confirmed) setItems([]);
  }
  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearList={handleClearList}
         
        />
        <Stats items={items} />
      </div>
    </>
  );
}





