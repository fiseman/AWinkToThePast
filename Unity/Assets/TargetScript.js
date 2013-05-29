#pragma strict
var TargetSpawnPointStart : Transform;
var TargetSpawnPointEnd : Transform;

private var speed : float = 1;

function Start () 
{

}

function Update () 
{
	if (transform.position.x >= TargetSpawnPointEnd.position.x)
	{
		transform.position = TargetSpawnPointStart.position;
	}
	else
	{
		transform.Translate(Vector3.right * Time.deltaTime * speed);
	}
}