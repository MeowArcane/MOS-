//MOS
var Version = 0;
var Subversion = 2;
var Subsubversion = 0;
var Subsubsubversion = 3;
var VersionText = ((((((("Version " + Version) + ".") + Subversion) + ".") + Subsubversion + "." + Subsubsubversion) + "\n Build ") + "15") + "";
var MusicID = 2;
var Apps = ["Settings", "App Store"];
var Beta = 1;
var OOSHome = "";
var OOSTerminalSetUp = 0;
var OOSTerminal = "";
var ISOOS = 0;
var OOSSetUp = 0;
var SCR = "MOS.Boot";
//DO NOT MODIFY!
function Supersetscreen(scr) {
  SCR = scr;
  setScreen(scr);
}
//Boot Modular-OS 
MOSBoot();
timedLoop(100, function() {
  setText("MOS.Homescreen.Time", (SOA.gettime() + "                      ") + SOA.getdate());
  if (Beta == 1) {
    setText("MOS.Settings.About.Background", ("About \n \n \n" + VersionText) + "\n Beta Build .idex-1" + "\n \n This OS is made with open source projects like SOA!");
  } else {
    setText("MOS.Settings.About.Background", ("About \n \n \n" + VersionText) +  "\n \n This OS is made with open source projects like SOA!");
  }
});
function MOSBoot() {
  setTimeout(function() {
    Supersetscreen("MOS.Homescreen");
    console.log("Korishmo Technology Pre-release Operating System Modular-OS " + Version + "."+Subversion+"."+Subsubversion);
    console.log("This tool is only for developers, if someone asked to type something here, it could make your device unbootable");
    showElement("MOS.Homescreen.icon.1");
    showElement("MOS.Homescreen.icon.2");
    setProperty("MOS.Homescreen.icon.1", "image", "icon://fa-cogs");
    setProperty("MOS.Homescreen.icon.2", "image", "icon://fa-download");
  }, 370);
}
//Open Apps (Icons)
onEvent("MOS.Homescreen.icon.1", "click", function( ) {
  Supersetscreen("MOS.Settings");
});
onEvent("MOS.Homescreen.icon.2", "click", function( ) {
  Supersetscreen("MOS.Appstore");
});
onEvent("MOS.Homescreen.icon.3", "click", function( ) {
  Supersetscreen("MOS.Music");
});
//Close Apps (Bars)
onEvent("MOS.Settings.Bar.Back", "click", function( ) {
  Supersetscreen("MOS.Homescreen");
});
onEvent("MOS.Settings.OOSS1.SetUp", "click", function( ) {
  Supersetscreen("MOS.Settings.OOSManager");
});
onEvent("MOS.Music.Bar.Back", "click", function( ) {
  Supersetscreen("MOS.Homescreen");
});
//App menus (Settings)
onEvent("MOS.Settings.OOSManager.Bar.Back", "click", function( ) {
  Supersetscreen("MOS.Settings.OOSManager");
  OOSHome = getText("MOS.HOS");
});
onEvent("MOS.Settings.OOS.Bar.Back", "click", function( ) {
  Supersetscreen("MOS.Settings.Advanced");
});
onEvent("MOS.Settings.OOS.SetUp", "click", function( ) {
  Supersetscreen("MOS.Settings.OtherOSSetup1");
});
onEvent("MOS.Settings.OOSS1.Bar.Back", "click", function( ) {
  Supersetscreen("MOS.Settings");
});
onEvent("MOS.Settings.Customizer.Bar.Back", "click", function( ) {
  Supersetscreen("MOS.Settings.Advanced");
});
onEvent("MOS.Settings.Button.1", "click", function( ) {
  Supersetscreen("MOS.Settings.Wallpapers");
});
onEvent("MOS.Settings.Advanced.Button.1", "click", function( ) {
  Supersetscreen("MOS.Settings.Customizer");
});
onEvent("MOS.Settings.Button.3", "click", function( ) {
  Supersetscreen("MOS.Settings.Advanced");
});
onEvent("MOS.Settings.Advanced.Bar.Back", "click", function( ) {
  Supersetscreen("MOS.Settings");
});
onEvent("MOS.Settings.Button.2", "click", function( ) {
  Supersetscreen("MOS.Settings.About");
});
onEvent("MOS.Settings.About.Bar.Back", "click", function( ) {
  Supersetscreen("MOS.Settings");
});
onEvent("MOS.Settings.Customizer.Scale.AppScale", "input", function( ) {
  textScale(getProperty("MOS.Settings.Customizer.Scale.AppScale", "value"));
});
onEvent("MOS.Settings.Customizer.Scale.RGB.R", "input", function( ) {
  iconColor(getProperty("MOS.Settings.Customizer.Scale.RGB.R", "value"), getProperty("MOS.Settings.Customizer.Scale.RGB.G", "value"), getProperty("MOS.Settings.Customizer.Scale.RGB.B", "value"));
});
onEvent("MOS.Settings.Customizer.Scale.RGB.G", "input", function( ) {
  iconColor(getProperty("MOS.Settings.Customizer.Scale.RGB.R", "value"), getProperty("MOS.Settings.Customizer.Scale.RGB.G", "value"), getProperty("MOS.Settings.Customizer.Scale.RGB.B", "value"));
});
onEvent("MOS.Settings.Customizer.Scale.RGB.B", "input", function( ) {
  iconColor(getProperty("MOS.Settings.Customizer.Scale.RGB.R", "value"), getProperty("MOS.Settings.Customizer.Scale.RGB.G", "value"), getProperty("MOS.Settings.Customizer.Scale.RGB.B", "value"));
});
onEvent("MOS.Settings.Customizer.Scale.IconSize", "input", function( ) {
  if (getProperty("MOS.Settings.Customizer.Scale.IconSize", "index") == 1) {
    iconSize(55);
  } else {
    iconSize(42);
  }
});
onEvent("MOS.Settings.Wallpapers.Bar.Back", "click", function( ) {
  Supersetscreen("MOS.Settings");
});
onEvent("MOS.Settings.Advanced.Button.3", "click", function( ) {
  Supersetscreen("MOS.Settings.Modules");
});
onEvent("MOS.Settings.Modules.Mod1", "click", function( ) {
  showElement("MOS.Settings.Modules.Mod1.Remove");
  hideElement("MOS.Settings.Modules.Mod2.Remove");
  hideElement("MOS.Settings.Modules.Mod3.Remove");
  hideElement("MOS.Settings.Modules.Mod4.Remove");
  hideElement("MOS.Settings.Modules.Mod5.Remove");
});
onEvent("MOS.Settings.Modules.Mod2", "click", function( ) {
  showElement("MOS.Settings.Modules.Mod2.Remove");
  hideElement("MOS.Settings.Modules.Mod1.Remove");
  hideElement("MOS.Settings.Modules.Mod3.Remove");
  hideElement("MOS.Settings.Modules.Mod4.Remove");
  hideElement("MOS.Settings.Modules.Mod5.Remove");
});
onEvent("MOS.Settings.Modules.Mod3", "click", function( ) {
  showElement("MOS.Settings.Modules.Mod3.Remove");
  hideElement("MOS.Settings.Modules.Mod2.Remove");
  hideElement("MOS.Settings.Modules.Mod1.Remove");
  hideElement("MOS.Settings.Modules.Mod4.Remove");
  hideElement("MOS.Settings.Modules.Mod5.Remove");
});
onEvent("MOS.Settings.Modules.Mod4", "click", function( ) {
  showElement("MOS.Settings.Modules.Mod4.Remove");
  hideElement("MOS.Settings.Modules.Mod2.Remove");
  hideElement("MOS.Settings.Modules.Mod3.Remove");
  hideElement("MOS.Settings.Modules.Mod1.Remove");
  hideElement("MOS.Settings.Modules.Mod5.Remove");
});
onEvent("MOS.Settings.Modules.Mod5", "click", function( ) {
  showElement("MOS.Settings.Modules.Mod5.Remove");
  hideElement("MOS.Settings.Modules.Mod2.Remove");
  hideElement("MOS.Settings.Modules.Mod3.Remove");
  hideElement("MOS.Settings.Modules.Mod4.Remove");
  hideElement("MOS.Settings.Modules.Mod1.Remove");
});
onEvent("MOS.Settings.Modules.Mod1.Remove", "click", function( ) {
  hideElement("MOS.Settings.Modules.Mod1.Remove");
  hideElement("MOS.Settings.Modules.Mod1");
});
onEvent("MOS.Settings.Modules.Mod2.Remove", "click", function( ) {
  hideElement("MOS.Settings.Modules.Mod2.Remove");
  hideElement("MOS.Settings.Modules.Mod2");
});
onEvent("MOS.Settings.Modules.Mod3.Remove", "click", function( ) {
  hideElement("MOS.Settings.Modules.Mod3.Remove");
  hideElement("MOS.Settings.Modules.Mod3");
});
onEvent("MOS.Settings.Modules.Mod4.Remove", "click", function( ) {
  hideElement("MOS.Settings.Modules.Mod4.Remove");
  hideElement("MOS.Settings.Modules.Mod4");
  setPosition("MOS.Settings.Modules.Mod5", 20, 200);
  setPosition("MOS.Settings.Modules.Mod5.Remove", 260, 205);
});
onEvent("MOS.Settings.Modules.Mod5.Remove", "click", function( ) {
  hideElement("MOS.Settings.Modules.Mod5.Remove");
  hideElement("MOS.Settings.Modules.Mod5");
});
onEvent("MOS.Settings.Modules.Bar.Back", "click", function( ) {
  Supersetscreen("MOS.Settings");
});
onEvent("MOS.Settings.Wallpapers.Wallpaper.01", "click", function( ) {
  wallpaper("wallpaper1-mos.png");
});
onEvent("MOS.Settings.Wallpapers.Wallpaper.02", "click", function( ) {
  wallpaper("wallpaper2-mos.png");
});
onEvent("MOS.Settings.Wallpapers.Wallpaper.03", "click", function( ) {
  wallpaper("wallpaper3-mos.png");
});
onEvent("MOS.Settings.Wallpapers.Wallpaper.04", "click", function( ) {
  wallpaper("wallpaper4-mos.png");
});
function wallpaper(img) {
  setProperty("MOS.Homescreen", "image", img);
  setProperty("MOS.Settings", "image", img);
  setProperty("MOS.Settings.About", "image", img);
  setProperty("MOS.Settings.Advanced", "image", img);
  setProperty("MOS.Settings.Customizer", "image", img);
  setProperty("MOS.Settings.Wallpapers", "image", img);
  setProperty("MOS.Settings.OOSError", "image", img);
  setProperty("MOS.Settings.OOSManager", "image", img);
  setProperty("MOS.Settings.OtherOSSetup0", "image", img);
  setProperty("MOS.Settings.OtherOSSetup1", "image", img);
  setProperty("MOS.Settings.Modules", "image", img);
}
function textScale(fs) {
  setProperty("MOS.Settings.Customizer.Label.1", "font-size", fs);
  setProperty("MOS.Settings.Button.1", "font-size", fs);
  setProperty("MOS.Settings.Button.2", "font-size", fs);
  setProperty("MOS.Settings.About.Background", "font-size", fs);
  setProperty("MOS.Settings.Background", "font-size", fs);
  setProperty("MOS.Settings.Customizer.Background", "font-size", fs);
  setProperty("MOS.Homescreen.icon.1", "font-size", fs);
  setProperty("MOS.Settings.Customizer.Label.2", "font-size", fs);
  setProperty("MOS.Settings.Customizer.Label.3", "font-size", fs);
  setProperty("MOS.Settings.Advanced.Button.1", "font-size", fs);
  setProperty("MOS.Settings.Advanced.Button.2", "font-size", fs);
  setProperty("MOS.Settings.Advanced.Button.3", "font-size", fs);
  setProperty("MOS.Settings.Background", "font-size", fs);
  setProperty("MOS.Settings.Button.3", "font-size", fs);
}
function iconColor(r, g, b) {
  setProperty("MOS.Homescreen.icon.1", "icon-color", rgb(r,g,b));
  setProperty("MOS.Homescreen.icon.2", "icon-color", rgb(r,g,b));
  setProperty("MOS.Homescreen.icon.3", "icon-color", rgb(r,g,b));
  setProperty("MOS.Homescreen.icon.4", "icon-color", rgb(r,g,b));
  setProperty("MOS.Homescreen.icon.5", "icon-color", rgb(r,g,b));
  setProperty("MOS.Homescreen.icon.6", "icon-color", rgb(r,g,b));
  setProperty("MOS.Homescreen.icon.7", "icon-color", rgb(r,g,b));
  setProperty("MOS.Homescreen.icon.8", "icon-color", rgb(r,g,b));
}
function iconSize(size) {
  setProperty("MOS.Homescreen.icon.1", "width", size);
  setProperty("MOS.Homescreen.icon.2", "width", size);
  setProperty("MOS.Homescreen.icon.3", "width", size);
  setProperty("MOS.Homescreen.icon.4", "width", size);
  setProperty("MOS.Homescreen.icon.5", "width", size);
  setProperty("MOS.Homescreen.icon.6", "width", size);
  setProperty("MOS.Homescreen.icon.7", "width", size);
  setProperty("MOS.Homescreen.icon.8", "width", size);
  setProperty("MOS.Homescreen.icon.1", "height", size);
  setProperty("MOS.Homescreen.icon.2", "height", size);
  setProperty("MOS.Homescreen.icon.3", "height", size);
  setProperty("MOS.Homescreen.icon.4", "height", size);
  setProperty("MOS.Homescreen.icon.5", "height", size);
  setProperty("MOS.Homescreen.icon.6", "height", size);
  setProperty("MOS.Homescreen.icon.7", "height", size);
  setProperty("MOS.Homescreen.icon.8", "height", size);
}
//App.settings.oosmanager
onEvent("MOS.Settings.Advanced.Button.2", "click", function( ) {
if (OOSSetUp == 0) {
  Supersetscreen("MOS.Settings.OtherOSSetup0");
} else {
  Supersetscreen("MOS.Settings.OOSManager");
}
});
onEvent("MOS.Settings.OOS.SetUp", "click", function( ) {
Supersetscreen("MOS.Settings.OtherOSSetup1");
});
onEvent("MOS.Settings.OOSS1.SetUp", "click", function( ) {
Supersetscreen("MOS.Settings.OOSManager");
OOSHome = getText("MOS.HOS");
OOSSetUp = 1;
});
onEvent("MOS.Settings.OOSManager.Bar.Back", "click", function( ) {
Supersetscreen("MOS.Settings.Advanced");
});
onEvent("MOS.Settings.OOSS1.Bar.Back", "click", function( ) {
Supersetscreen("MOS.Settings.Advanced");
});
onEvent("MOS.Settings.OOS.Bar.Back", "click", function( ) {
Supersetscreen("MOS.Settings.Advanced");
});
function ToOOSHome() {
  Supersetscreen(OOSHome);
}
onEvent("MOS.Settings.OOSManager.RunOS", "click", function( ) {
ToOOSHome();
});
onEvent("MOS.Settings.OOSManager.Help", "click", function( ) {
Supersetscreen("MOS.Settings.OOSError");
setText("MOS.Settings.OOSErr.Err", "WIP");
});
onEvent("MOS.Settings.OOSErr.OK", "click", function( ) {
Supersetscreen("MOS.Settings.OOSManager");
});
function ToOOSTerminal() {
  if (OOSTerminalSetUp == 0) {
    Supersetscreen("MOS.Settings.OOSError");
    setText("MOS.Settings.OOSErr.Err", "You haven't set up terminal yet!");
  } else {
    Supersetscreen(OOSTerminal);
  }
}
onEvent("MOS.Settings.OOSManager.Terminal", "click", function( ) {
	ToOOSTerminal();
});
onEvent("MOS.Settings.OOSErr.OK", "click", function( ) {
	Supersetscreen("MOS.Settings.OOSManager");
});
//App.appstore
onEvent("MOS.Appstore.Music.Install", "click", function( ) {
  showElement("MOS.Appstore.Music.Uninstall");
  hideElement("MOS.Appstore.Music.Install");
  showElement("MOS.Homescreen.icon.3");
  appendItem(Apps, "Music");
  setProperty("MOS.Homescreen.icon.3", "image", "icon://fa-music");
});
onEvent("MOS.Appstore.Music.Uninstall", "click", function( ) {
  hideElement("MOS.Homescreen.icon.3");
  showElement("MOS.Appstore.Music.Install");
  hideElement("MOS.Appstore.Music.Uninstall");
  stopSound();
  removeItem(Apps, Apps.length - 1);
  setProperty("MOS.Homescreen.icon.3", "image", "icon://fa-question");
});
onEvent("MOS.Appstore.Bar.Back", "click", function( ) {
  Supersetscreen("MOS.Homescreen");
});
//App.music
onEvent("MOS.Music.Song.Stop", "click", function( ) {
  stopSound();
});
onEvent("MOS.Music.Song.1", "click", function( ) {
  playSound("music1-mos.mp3", false);
});
onEvent("MOS.Music.Song.2", "click", function( ) {
  playSound("music2-mos.mp3", false);
});
