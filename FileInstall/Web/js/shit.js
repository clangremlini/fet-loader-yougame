function GetSelectedCheat()
{
    var radioValue = $("input[name='cheat']:checked").val();
    return radioValue;
}
function CheatButtonClicked()
{
    document.getElementById("inject_button").disabled = false;
}
function BypassButtonClicked()
{
    document.getElementById("bypass_button").disabled = true;
    document.getElementById("bypass_button").textContent = "Bypass enabled!";
    ahk.Bypass();
}
function setTheme(color, color2)
{
    $("body").css("background", color)
    $(".btn-outline-primary").css("color", color2)
}
function toggleTheme() {
    theme = document.body.style.getPropertyValue("background")
    theme_dark = "#454851"
    theme_light = "#dbdbdb"
    if (theme == "rgb(219, 219, 219)") {
        setTheme(theme_dark, "#FFFFFF")
    } else {
        setTheme(theme_light, "#000000")
    }
}
