// services/api.js
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

export const gameService = {
    async addShip(player, cords1, cords2) {
        try {
            const response = await fetch(`http://localhost:9000/game/player${player}/addShip`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ first: cords1, second: cords2 })
            })
            return await response.json()
        } catch (error) {
            console.error('Error adding ship:', error)
            throw error
        }
    },

    async checkShipsReady(player) {
        const response = await fetch(`${apiBaseUrl}/game/shipsReady/${player}`)
        return await response.json()
    }
}