#pragma strict
var TargetSpawnPointStart : Transform;
var TargetSpawnPointEnd : Transform;
var speed : float;
var Amplitude : float = 1;

private var period : float = 1;
private var centerPosition : Vector3;
private var degrees : float = 0;

function Start () 
{
	centerPosition = transform.position;
	if (!speed)
	{
		speed = 1; // default speed
	}
}

function Update () 
{
	var deltaTime = Time.deltaTime;

	if (speed < 0)
	{
		if (transform.position.x <= TargetSpawnPointEnd.position.x)
		{
			transform.position = TargetSpawnPointStart.position;
			return;
		}
	}
	else
	{
		if (transform.position.x >= TargetSpawnPointEnd.position.x)
		{
			transform.position = TargetSpawnPointStart.position;
			return;
		}
	}
	
	transform.Translate(Vector3.right * deltaTime * speed);
	
	transform.position.y = Mathf.Sin(Time.time * period) * Amplitude;
	return;
	
	// Move center along x axis
	var offset = Vector3(0,0,0);
	
	if (Amplitude)
	{
        // Update degrees
        var degreesPerSecond = 360.0 / period;
        var degrees = Mathf.Repeat(degrees + (Time.deltaTime * degreesPerSecond), 360.0);
        var radians = degrees * Mathf.Deg2Rad;

        // Offset by sin wave
        offset = Vector3(0.0, Amplitude * Mathf.Sin(radians), 0.0);

        //transform.position += offset;
		//transform.Translate(Vector3.up * offset.y);
	}
	
	//transform.position = centerPosition + offset;
}