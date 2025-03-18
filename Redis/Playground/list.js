const client = require('./client')

// Treat a list like a queue (first in, first out):
async function queue() {
    const res1 = await client.lpush('bikes:repairs', 'bike:1');
    console.log(res1);  // 1 (Added 'bike:1' to the list)
    
    const res2 = await client.lpush('bikes:repairs', 'bike:2');
    console.log(res2);  // 2 (Added 'bike:2' to the list)
    
    const res3 = await client.rpop('bikes:repairs');
    console.log(res3);  // bike:1 (Removed the first item added, 'bike:1')
    
    const res4 = await client.rpop('bikes:repairs');
    console.log(res4);  // bike:2 (Removed the next item, 'bike:2')
}

// Treat a list like a stack (first in, last out):
async function stack() {
    const res5 = await client.lpush('bikes:repairs', 'bike:1');
    console.log(res5);  // 1 (Added 'bike:1' to the list)

    const res6 = await client.lpush('bikes:repairs', 'bike:2');
    console.log(res6); // 2 (Added 'bike:2' to the list)

    const res7 = await client.lpop('bikes:repairs');
    console.log(res7);  // bike:2 (Removed the last item added, 'bike:2')

    const res8 = await client.lpop('bikes:repairs');
    console.log(res8);  // bike:1 (Removed the next item, 'bike:1')
}

// Advanced Redis List Commands
async function advancedListCommands() {
    // Add multiple items to the list
    await client.rpush('bikes:repairs', 'bike:3', 'bike:4', 'bike:5');

    // Get all items in the list
    const allItems = await client.lrange('bikes:repairs', 0, -1);
    console.log('All items:', allItems); // ['bike:3', 'bike:4', 'bike:5']

    // Get the length of the list
    const length = await client.llen('bikes:repairs');
    console.log('List length:', length); // 3

    // Get an item by index
    const itemAtIndex1 = await client.lindex('bikes:repairs', 1);
    console.log('Item at index 1:', itemAtIndex1); // 'bike:4'

    // Remove specific items from the list
    const removedCount = await client.lrem('bikes:repairs', 1, 'bike:4');
    console.log('Removed count:', removedCount); // 1

    // Trim the list to keep only a specific range
    await client.ltrim('bikes:repairs', 0, 1);
    const trimmedList = await client.lrange('bikes:repairs', 0, -1);
    console.log('Trimmed list:', trimmedList); // ['bike:3', 'bike:5']

    // Insert an item before or after a pivot
    await client.linsert('bikes:repairs', 'BEFORE', 'bike:5', 'bike:6');
    const updatedList = await client.lrange('bikes:repairs', 0, -1);
    console.log('Updated list after linsert:', updatedList); // ['bike:3', 'bike:6', 'bike:5']
}

// Additional Redis List Commands
async function additionalListCommands() {
    // Add items to two lists
    await client.rpush('bikes:repairs', 'bike:7', 'bike:8');
    await client.rpush('bikes:completed', 'bike:9');

    // Atomically pop from one list and push to another
    const movedItem = await client.rpoplpush('bikes:repairs', 'bikes:completed');
    console.log('Moved item:', movedItem); // 'bike:8'

    // Blocking pop from the left of a list
    const blPopResult = await client.blpop('bikes:repairs', 5); // Wait up to 5 seconds
    console.log('Blocking left pop result:', blPopResult); // ['bikes:repairs', 'bike:7']

    // Blocking pop from the right of a list
    const brPopResult = await client.brpop('bikes:completed', 5); // Wait up to 5 seconds
    console.log('Blocking right pop result:', brPopResult); // ['bikes:completed', 'bike:8']

    // Blocking pop from one list and push to another
    await client.rpush('bikes:repairs', 'bike:10');
    const brPopLPushResult = await client.brpoplpush('bikes:repairs', 'bikes:completed', 5);
    console.log('Blocking pop and push result:', brPopLPushResult); // 'bike:10'
}

// queue();
// stack();
advancedListCommands();
// additionalListCommands();