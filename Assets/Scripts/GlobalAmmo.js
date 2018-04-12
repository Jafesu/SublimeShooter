import UnityEngine.UI;

static var CurrentAmmo : int;
var Ammo : int;
var AmmoCount : GameObject;

function Update(){
	Ammo = CurrentAmmo;
	AmmoCount.GetComponent.<Text>().text = "" + Ammo;
}