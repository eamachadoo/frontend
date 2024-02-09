<script setup>
import { ref, onMounted } from 'vue'

const users = ref([])

async function fetchUsers() {
  try {
    const response = await fetch('http://localhost:8000/api/users')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    users.value = await response.json()

    // Log the users array to the console
    console.log(users.value)
  } catch (error) {
    console.error('Failed to fetch users:', error)
  }
}

async function deleteUser(index) {
  const user = users.value[index]
  await fetch(`http://localhost:8000/api/users/${user.id}`, { method: 'DELETE' })
  users.value.splice(index, 1)
}

async function updateUser(index) {
  const user = users.value[index]
  const response = await fetch(`http://localhost:8000/api/users/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  // Update the user in the users array
  users.value[index] = await response.json()
}

onMounted(fetchUsers)
</script>

<template>
  <div class="main-container">
    <h1>User Profiles</h1>
    <ul>
      <li v-for="(user, index) in users" :key="user.id">
        <form @submit.prevent="updateUser(index)">
          <label>
            Name:
            <input v-model="user.name" />
          </label>
          <label>
            Email:
            <input v-model="user.email" />
          </label>
          <label>
            Latitude:
            <input v-model="user.latitude" />
          </label>
          <label>
            Longitude:
            <input v-model="user.longitude" />
          </label>
          <button type="submit">Update</button>
        </form>
        <button @click="deleteUser(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<style>
  
</style>
