function GetSelectedCheat()
{
    var radioValue = $("input[name='cheat']:checked").val();
    return radioValue;
}
function CheatButtonClicked()
{
    document.getElementById("inject_button").disabled = false;
    GetCheatStatus(GetSelectedCheat());
    GetCheatAbout(GetSelectedCheat());
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
function GetCheatAbout(zaebalo) 
{
    var bruh = parseINIString(inifile)["info"][zaebalo];
    console.log(bruh);
    document.getElementById("shit228").textContent = bruh;
    return
}
function GetCheatStatus(zaebalo) {
    var status = parseINIString(inifile)["status"][zaebalo];
    console.log(status);
    if (status == "Use at own risk")
    {
      document.getElementById("shit").textContent = "Use at own risk";
      document.getElementById("cheatstatus").className = "text-warning";
    }
    if (status == "DETECT")
    {
      document.getElementById("shit").textContent = "DETECT";
      document.getElementById("cheatstatus").className = "text-danger";
    }
    if (status == "UNDETECT")
    {
      document.getElementById("shit").textContent = "UNDETECT";
      document.getElementById("cheatstatus").className = "text-success";
    }
    return
}