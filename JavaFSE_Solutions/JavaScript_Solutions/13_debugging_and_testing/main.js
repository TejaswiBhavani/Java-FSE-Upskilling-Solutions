function triggerRegistration() {
    console.log("Step 1: Initiation");
    
    const payload = { user: "Test", email: "test@x.com" };
    // Put a breakpoint below in Devtools!
    console.log("Step 2: Sending payload - check Network tab", payload);

    fetch('https://jsonplaceholder.typicode.com/invalidEndpoint', {
        method: 'POST',
        body: JSON.stringify(payload)
    })
    .then(r => {
        if(!r.ok) throw new Error('Response not OK');
    })
    .catch(e => console.error("Step 3: Registration failed silently?", e.message));
}
