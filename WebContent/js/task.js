/**
 * 
 */

self.addEventListener("message", messageReceived,false);

function messageReceived(event)
{
	var result;
	if(event.data == "t1")
	{
		result = handleTask1();
	}
	else{
		result="Another task completed"+event.data;
	}

	self.postMessage(result);
}

function handleTask1()
{
	for(var i=0;i<10000000;++i)
		{
		
		}
	return "Task 1 completed";
}