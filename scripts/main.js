
const MessegeForm = document.forms.formM;
const nameIn = document.querySelector('#windowMsg-name');
//регулярное выражение
const regex = /^[A-Za-z]+[A-Za-z ]*$|^[А-Яа-я]+[А-Яа-я ]*$/;

// создание объектов формы имя, сообщение
function extractElements(form) {
    const elements = Array.from(form.elements).filter(el => {
        return el.name != "";
    });
    let result = new FormData();
    for (let el of elements) {
        result[el.name] = el.value;
    }
    return result;
}
//проверка ввода имени
nameIn.addEventListener('input', () => {
    if (regex.test(nameIn.value)) {
        nameIn.style.borderColor = 'green';
        document.querySelector('#windowMsgSend').disabled = false;
    }
    else {
        nameIn.style.borderColor = 'red';
        document.querySelector('#windowMsgSend').disabled = true;
    }
})
//Добавление нового сообщения в форум
document.getElementById('windowMsgSend').addEventListener('click', () => {
    console.log(extractElements(MessegeForm))
    var date = new Date();
    document.querySelector('.windowView').innerHTML +=
        (
            ` <div class="forumMsg">
        <div class="forumMsgTitle">
            <div class="titleName">
                ${extractElements(MessegeForm).name}
            </div>
            <div class="titleDate">
                ${date.toLocaleTimeString() + " " + date.toLocaleDateString()}
            </div>
        </div>
        <div class="forumMsgText">
${extractElements(MessegeForm).messege}
</div>
    </div>      
        `
        )
});