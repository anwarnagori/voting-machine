function userInput() {
    let inpEl = document.getElementById("userValue");

    let inpValue = inpEl.value;

    let h3El = document.createElement("H3");

    h3El.className = "h3";

    h3El.textContent = `${inpValue} 0`;

    h3El.addEventListener("click", function () {
        let values = this.textContent.split(" ");

        let count = parseInt(values[values.length - 1]);

        count++;

        this.textContent = `${values.slice(0, -1).join("")} ${count}`;
    })

    document.getElementById("content").appendChild(h3El);

    inpEl.value = "";
}