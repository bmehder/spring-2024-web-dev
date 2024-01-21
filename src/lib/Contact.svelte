<script>
	let form, firstName, lastName, email, message

	function handleSubmit() {
		alert(JSON.stringify({ firstName, lastName, email, message }, null, 2))
		form.reset()
	}
</script>

<form bind:this={form} on:submit|preventDefault={handleSubmit}>
	<div>
		<label for="first-name">First Name</label>
		<input
			type="text"
			id="first-name"
			name="first-name"
			placeholder="John"
			required
			bind:value={firstName}
		/>
	</div>
	<div>
		<label for="last-name">Last Name</label>
		<input
			type="text"
			id="last-name"
			name="last-name"
			placeholder="Doe"
			required
			bind:value={lastName}
		/>
	</div>
	<div>
		<label for="email">Email</label>
		<input
			type="email"
			id="email"
			name="email"
			placeholder="john@example.com"
			required
			bind:value={email}
		/>
	</div>
	<div>
		<label for="message">Message</label>
		<textarea
			name="message"
			id="message"
			rows="10"
			placeholder="Please enter your message..."
      required
      minlength="5"
			bind:value={message}
		></textarea>
	</div>
	<div>
		<button>Submit Message</button>
	</div>
</form>

<style>
	form {
		max-width: 32rem;
		display: grid;
		gap: 1.5rem;
		padding-block: 1.5rem;
	}

	div {
		display: grid;
		gap: 0.5rem;
	}
</style>
