export interface Game {
    data: {
      id: number
      attributes: {
        name: string
        genre: string
        year: string
        publisher: string
        description: string
        slug: string
        image: any
      }
    }
  }
  
export interface GameUser {
    data: {
        id: number
        attributes: {
        username: string
        email: string
        nfc: number
        }
    }
}

export interface Session {
    id: number
    attributes: {
        score: number
        initDate: Date
        duration: number
        game: Game
        game_user: GameUser
    }
}

/**This is only use in the board list */
export interface BoardSession {
    position: number
    score: number
    initDate: Date
    duration: number
    name: string
}

export interface Metadata {
    pagination: {
        page: number
        pageSize: number
        pageCount: number
        total: number
    }
}

export interface ScoreBoard {
    data: Session[] | null
    meta: Metadata | null
}