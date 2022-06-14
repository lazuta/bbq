$(document).ready(function () {
    document.querySelector('#preloader').style.display = 'none';

    $("#add_button").on('click', function (event) {
        execute();
    });

    function execute() {
        const name = document.querySelector('input[name="inputName"]').value;

        let countPeople = null;
        document.querySelectorAll('input[name="countPeople"]').forEach(element => {
            console.log(element.checked);
            if (element.checked) countPeople = element.value;
        });

        let terget = null;
        document.querySelectorAll('input[name="terget"]').forEach(element => {
            console.log(element.checked);
            if (element.checked) terget = element.value;
        });

        let time = null;
        document.querySelectorAll('input[name="time"]').forEach(element => {
            console.log(element.checked);
            if (element.checked) time = element.value;
        });

        let game = null;
        document.querySelectorAll('input[name="game"]').forEach(element => {
            console.log(element.checked);
            if (element.checked) game = element.value;
        });

        const menu = document.querySelectorAll('input[name="menu"]');
        const menuOther = document.querySelector('input[name="menuOther"]').value;
        
        document.querySelectorAll('input[name="countPeople"]').forEach(element => {
            if (element.checked) countPeople = element.value;
        });

        let menuString = '';
        menu.forEach(element => {
            menuString += (element.checked) ? (element.value + ', ') : '';  
        });

        menuString += `, ${menuOther}.`;

        let message = `
            Курортник: ${name}.\n${countPeople}.\n${terget}.\nВремя меропиятия: ${time}.\nИгры: ${game}.\nПредпочтительное меню: ${menuString}. 
        `;

        const token = '5599050517:AAE1V3Yb3u9im-6srZcZHf5MOCVv76J17Cw';
        const chatId = '193004068';

        $.ajax({
            type: 'POST',
            url: `https://api.telegram.org/bot${token}/sendMessage`,
            data: {
                chat_id: chatId,
                text: message,
                parse_mode: 'html',
            },
            success: function (res) {
                console.debug(res);
                document.querySelector('#alert').style.display = 'flex';
            },
            error: function (error) {
                console.error(error);
                alert("error failed");
            }
        });
    }
});