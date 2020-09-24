$("#address").suggestions({
    token: "06eb97abcccbd1389f205f95c426e7734e7bfd14",
    type: "ADDRESS",
    /* Вызывается, когда пользователь выбирает одну из подсказок */
    onSelect: function(suggestion) {
        console.log(suggestion);
    }
});