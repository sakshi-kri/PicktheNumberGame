document.addEventListener("DOMContentLoaded", function () {
    // Get references to the result div and all number buttons
    const result = document.getElementById("result");
    const buttons = Array.from(document.querySelectorAll(".number-btn"));

    // Shuffle function
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Shuffle buttons
    const shuffledButtons = shuffleArray(buttons);

    // Append shuffled buttons to the button container
    const buttonContainer = document.querySelector(".btn-group");
    buttonContainer.innerHTML = ""; // Clear existing buttons
    shuffledButtons.forEach(button => buttonContainer.appendChild(button));

    // Add event listeners to each button
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedNumber = button.getAttribute("data-number");

            // Display the result based on the selected number
            switch (selectedNumber) {
                case "1":
                    result.textContent = "Do Nothing.";
                    break;
                case "2":
                    result.textContent = "Tell a funny joke or riddle.";
                    break;
                case "3":
                    result.textContent = "Act out your favorite animal without making any noise till the others guess it right.";
                    break;
                case "4":
                    result.textContent = "Extend a friendly greeting to a stranger nearby.";
                    break;
                case "5":
                    result.textContent = "Bring the water for me.";
                    break;
                case "6":
                    result.textContent = "Sing a silly song loudly for one minute.";
                    break;
                case "7":
                    result.textContent = "Recite the alphabet backward.";
                    break;
                case "8":
                    result.textContent = "Walk backward in a straight line without tripping.";
                    break;
                case "9":
                    result.textContent = "Make a funny face and hold it for 10 seconds.";
                    break;
                case "10":
                    result.textContent = "Mimic an animal and have others guess what it is.";
                    break;
                case "11":
                    result.textContent = "Tell a short, made-up story using five random objects in the room.";
                    break;
                case "12":
                    result.textContent = "Close your eyes and walk in a straight line for five steps.";
                    break;
                case "13":
                    result.textContent = "Pretend you're a robot and move like one for a minute.";
                    break;
                case "14":
                    result.textContent = "Do your best impression of your favorite cartoon character.";
                    break;
                case "15":
                    result.textContent = "Share a personal truth or fact about yourself that hasn't been disclosed to others.";
                    break;
                case "16":
                    result.textContent = "Let others guess the movie by doing charades.";
                    break;
                case "17":
                    result.textContent = "Do a silly dance for 30 seconds.";
                    break;
                case "18":
                    result.textContent = "Play charades for a song of your choice.";
                    break;
                case "19":
                    result.textContent = "Recite a nursery rhyme.";
                    break;
                case "20":
                    result.textContent = "Start with a word beginning with 'T' and rotate among the group to make a new word starting with the last letter of the previous word for 20 seconds.";
                    break;
                default:
                    result.textContent = "Please select a valid number.";
            }
        });
    });
});
