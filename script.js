const examplesList = document.getElementById('examplesList');
        Examples_Table.forEach(example => {
            const listExample = document.createElement('li');
            listExample.classList.add('list-group-item');
            listExample.innerHTML = `<h4>${example.description}</h4><pre class=\"code\">${example.code}</pre>`;
            examplesList.appendChild(listExample);
        });