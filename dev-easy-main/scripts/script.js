$(document).ready(function () {
    console.log("console log is here");

    let classFacts = [
        'I have two brothers', 'My favorite color is purple', 'I like to swim', 
        'I broke my finger', 'I am ambidextrous', 'I can say the alphabet backwards',
        'I am not famous', 'I was born in Louisiana', 'I have never had a PB&J',
        'I am allergic to cats', 'I like trains', 'I know the secret identity to beastcarp1',
        'I have a dog', 'I hate UNA parking', 'I have three dogs', 'I am adopted from China',
        'I used to have an orange Hummer H3', 'I play on the rugby team', 'UNA basketball sold the bag',
        'I hate JavaScript', 'The Great Wall of China is 13,000 miles long', 
        'I love the Bible verse Romans 5:8', 'I like running', 'placeholder number 24',
        'placeholder number 25', 'placeholder number 26', 'placeholder number 27', 'placeholder number 28'
    ];

    let isAscending = true; // Sorting order flag

    function renderList() {
        const classFactList = $("#classFactList");
        classFactList.empty(); // Clear previous items

        classFacts.forEach((fact, index) => {
            const factText = $("<div>").addClass("fact-text").attr("contenteditable", true).text(fact);

            factText.on('blur', function () {
                classFacts[index] = factText.text();
            });

            const listItem = $("<li>").addClass("list-group-item").append(factText);
            classFactList.append(listItem);
        });
    }

    // Button click event for sorting
    $("#sortButton").on("click", function () {
        if (isAscending) {
            classFacts.sort(); // Sort A-Z
            $(this).text("Sort Z-A");
        } else {
            classFacts.sort().reverse(); // Sort Z-A
            $(this).text("Sort A-Z");
        }
        isAscending = !isAscending;
        renderList(); // Re-render list after sorting
    });

    renderList(); // Initial render
});
