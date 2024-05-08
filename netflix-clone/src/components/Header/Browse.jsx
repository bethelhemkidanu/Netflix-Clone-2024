// import React, { useState } from "react";
// import "./header.css";
// import NetflixLogo from "../../assets/images/NetflixLogo.png";
// function DropdownMenu() {
//   // Define state to manage the visibility of the dropdown
//   const [isOpen, setIsOpen] = useState(false);

//   // Function to handle opening the dropdown
//   const openDropdown = () => {
//     setIsOpen(true);
//   };

//   // Function to handle closing the dropdown
//   const closeDropdown = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="browse">
//       {/* Render the dropdown button */}
//       <h2 onClick={isOpen ? closeDropdown : openDropdown}>
//         {isOpen ? "browse " : "browse"}
//       </h2>
//       {/* Render the list of <li> elements conditionally based on the dropdown's visibility */}
//       {isOpen && (
//         <ul>
//           {/* <li onClick={closeDropdown}>
//             <img src={NetflixLogo} alt="Netflix Logo" width="100" />
//           </li> */}

//           <li onClick={closeDropdown}>
//             <a href="/Home">Home</a>
//           </li>
//           <li onClick={closeDropdown}>
//             <a href="/TVShows">TVShows</a>
//           </li>
//           <li onClick={closeDropdown}>
//             <a href="/Movies">Movies</a>
//           </li>
//           <li onClick={closeDropdown}>
//             <a href="/Movies"></a>
//           </li>
//           <li onClick={closeDropdown}>
//             <a href="/MyList">MyList</a>
//           </li>
//           <li onClick={closeDropdown}>
//             <a href="/Browse by Languages">Browse by Languages</a>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// }

// export default DropdownMenu;
