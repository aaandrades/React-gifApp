import getGifs from '../../helpers/getGifs'


describe('Test of GetGifs', () => {
    test('should fetch 10 elements', async() => {
        const gifs = await getGifs('Death Note');
        expect(gifs.length).toBe(10);
    })
})
