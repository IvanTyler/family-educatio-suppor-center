const $checkoutForm = document.forms.checkoutForm;
const $fullNameStudent = document.querySelector('#fullNameStudent')
const $emailStudent = document.querySelector('#emailStudent')
const $fullNameParent = document.querySelector('#fullNameParent')
const $emailParent = document.querySelector('#emailParent')
const $phoneParent = document.querySelector('#phoneParent')
const $messageDataSent = document.querySelector('.form-send-data__message-data-sent')
const $closeMessageDataSent = document.querySelector('.form-send-data__message-data-sent-close')


$(document).ready(function () {
    $("#phoneParent").mask("+7 (999) 99-99-999");
});

$fullNameStudent.addEventListener('input', function () {
    this.value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ .]/, '');
});

$fullNameParent.addEventListener('input', function () {
    this.value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ .]/, '');
});

$closeMessageDataSent.addEventListener('click', () => {
    $messageDataSent.style.display = 'none'
})

$checkoutForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target))

    if (!$fullNameStudent.value) {
        $fullNameStudent.classList.add('error')
    }
    if (!$emailStudent.value) {
        $emailStudent.classList.add('error')
    }
    if (!$fullNameParent.value) {
        $fullNameParent.classList.add('error')
    }
    if (!$emailParent.value) {
        $emailParent.classList.add('error')
    }
    if (!$phoneParent.value) {
        $phoneParent.classList.add('error')
    }

    else {
        $fullNameStudent.classList.remove('error')
        $emailStudent.classList.remove('error')
        $fullNameParent.classList.remove('error')
        $emailParent.classList.remove('error')
        $phoneParent.classList.remove('error')
        $messageDataSent.style.display = 'flex';
        console.log(formData);

        const response = await fetch('https://hssc-exam.ru/test/getTestData.php', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
    }
})

