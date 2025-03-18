const client = require('./client');

async function init() {
    // Basic Commands
    await client.set('user:5', 'singh'); // Set a key-value pair
    const res = await client.get('user:5'); // Get the value of a key
    console.log('GET user:5:', res);

    const result = await client.get('user:3'); // Attempt to get a non-existent key
    console.log('GET user:3 (non-existent):', result);

    await client.expire('user:5', 5); // Set an expiration time (5 seconds) for a key

    await client.set('counter', '10'); // Set a numeric string
    await client.incr('counter'); // Increment the value
    const counterValue = await client.get('counter');
    console.log('INCR counter:', counterValue);

    await client.incrby('counter', 5); // Increment by a specific value
    const counterValueAfterIncrBy = await client.get('counter');
    console.log('INCRBY counter by 5:', counterValueAfterIncrBy);

    await client.decr('counter'); // Decrement the value
    const counterValueAfterDecr = await client.get('counter');
    console.log('DECR counter:', counterValueAfterDecr);

    await client.decrby('counter', 3); // Decrement by a specific value
    const counterValueAfterDecrBy = await client.get('counter');
    console.log('DECRBY counter by 3:', counterValueAfterDecrBy);

    await client.append('user:5', ' kumar'); // Append a string to an existing key
    const appendedValue = await client.get('user:5');
    console.log('APPEND user:5:', appendedValue);

    const strLength = await client.strlen('user:5'); // Get the length of the string value
    console.log('STRLEN user:5:', strLength);

    await client.setrange('user:5', 6, 'Singh'); // Overwrite part of the string
    const updatedValue = await client.get('user:5');
    console.log('SETRANGE user:5:', updatedValue);

    const substring = await client.getrange('user:5', 0, 4); // Get a substring of the value
    console.log('GETRANGE user:5 (0-4):', substring);

    await client.mset('key1', 'value1', 'key2', 'value2'); // Set multiple keys at once
    const mgetValues = await client.mget('key1', 'key2'); // Get multiple keys at once
    console.log('MGET key1, key2:', mgetValues);

    await client.setnx('uniqueKey', 'uniqueValue'); // Set a key only if it does not already exist
    const uniqueValue = await client.get('uniqueKey');
    console.log('SETNX uniqueKey:', uniqueValue);

    await client.psetex('tempKey', 2000, 'temporaryValue'); // Set a key with a millisecond expiration
    const tempValue = await client.get('tempKey');
    console.log('PSETEX tempKey (2000ms):', tempValue);

    await client.set('numericKey', '100');
    const incrementedFloat = await client.incrbyfloat('numericKey', 1.5); // Increment a key by a float value
    console.log('INCRBYFLOAT numericKey by 1.5:', incrementedFloat);

    const bitSet = await client.setbit('bitKey', 7, 1); // Set a specific bit in a string
    console.log('SETBIT bitKey (bit 7):', bitSet);

    const bitValue = await client.getbit('bitKey', 7); // Get the value of a specific bit
    console.log('GETBIT bitKey (bit 7):', bitValue);

    const bitCount = await client.bitcount('bitKey'); // Count the number of set bits (1s) in a string
    console.log('BITCOUNT bitKey:', bitCount);

    await client.del('user:5', 'counter', 'key1', 'key2', 'uniqueKey', 'tempKey', 'numericKey', 'bitKey'); // Delete keys
    console.log('Keys deleted.');
}

init();