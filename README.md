# Dev Easy Project🦭
## This project was made by Olivia Sharpston, Jaxon Bladow, Corey Butler, and Hayden Carpenter.

#### Everyone had a part that they contributed to for this project. I had gotten the .hmtl and the .script files set up with the array of class facts and other code we needed. Additionally, I had put all of the files together into one repository. Jaxon had added the editting a fact and featuring a random fact. Corey had made it where you could sort the facts from A-Z or Z-A. Hayden has compiled the class facts and drew our wireframe.



#### Here is a piece that Corey had done to sort the class facts in A-Z or Z-A order.
https://github.com/Olivia-Sharpston/dev-easy/blob/c9e816147641bd407b8c92f7efe5e6db72cdfe10/scripts/script.js#L72-L84



#### This is the piece that Jaxon had done for our feature a random fact.
``` javascript
        for(index = 0; index < classFacts.length; index++){
        console.log(index);
        $('#classFactList').append('<li class="list-group-item">' + classFacts[index] + '</li>');

        function displayRandomFact() {
        const randomFact = classFacts[Math.floor(Math.random() * classFacts.length)];
        document.getElementById('randomFactHeader').innerText = randomFact;
    }

    $('#randomFactHeader').css('text-align', 'center');

    displayRandomFact();
        
        renderList();
    }
```



Here is a part of code used in order to make our **facts editable**. However, with this, it **does not change the actual facts** in the array. It only changed them on the webpage, and a simple refresh would have the facts back to normal.
``` diff
        classFacts.forEach((fact, index) => {
            const factText = $("<div>").addClass("fact-text").attr("contenteditable", true).text(fact);

            factText.on('blur', function() {
                classFacts[index] = factText.text();
            });
```

<details><summary>What were our random facts??</summary>
        
* Olivia knows her alphabet backwards
* Jaxon broke his finger
* Corey said he was not famous
* Hayden likes to swim

</details>
