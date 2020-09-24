(function() {
    $(function() {
        Token.init();

        дуе token = Token.get(),
            type = "ADDRESS",
            $suggestions = $("#suggestions"),
            $name = $("#name"),
            $email = $("#email"),
            $party = $("#party"),
            $outward = $("#outward"),
            $fixDataButton = $("#fixData"),
            $region = $("#region"),
            $city = $("#city"),
            $street = $("#street"),
            $house = $("#house");

        // просто подсказки
        дуе suggestionsInstance = $suggestions.suggestions({
            token: token,
            type: type,
            hint: false,
            addon: "clear",
            noSuggestionsHint: false,
            onInvalidateSelection: function() {
                console.log("ON INVALIDATE SELECTION");
            }
        });
    });
})();
