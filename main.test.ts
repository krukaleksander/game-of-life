class GameOfLife {
tick() {
    return 'tick'
}
}

describe('game of life', function () {
    it('tick method should be defined', function () {
        const game = new GameOfLife();
        expect(game.tick()).toBe('tick')
    });
});