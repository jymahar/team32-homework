  function searchArticle() {
    let input = document.getElementById('input-id').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('result-item');
    console.log(x.length);
    for (i = 0; i < x.length; i++) {
        console.log(x[i]);
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            console.log("found")
            x[i].style.display = "list-item";
        }
    }
}