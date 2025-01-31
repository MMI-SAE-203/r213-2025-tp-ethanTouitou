/*ethan TOUITOU mmi1 c2*/
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

/*(async () => {
    const maisons = await pb.collection('maison').getFullList();
    console.table(maisons);
})();
(async () => {
    const maison = await pb.collection('maison').getOne('zfc982hawwv3006');
    console.table(maison);
})();

(async () => {
    const maisons1 = await pb.collection('maison').getFullList({ sort: 'created' });
    console.table(maisons1);
})();

(async () => {
    const maisons1 = await pb.collection('maison').getFullList({ sort: '-created' });
    console.table(maisons1);
})();
(async () => {
    const maisons = await pb.collection('maison').getFullList({ filter: 'favori = true' });
    console.table(maisons);
})();
(async () => {
    const maisons = await pb.collection('maison').getFullList({ filter: 'surface > 100' });
    console.table(maisons);
})();
(async () => {
    const maisons = await pb.collection('maison').getFullList({ filter: 'surface_maison > 100 && nb_sdb >= 2' });
    console.table(maisons);
})();
(async () => {
    const maisons = await pb.collection('maison').getFullList({ filter: 'surface_maison > 100 && nb_sdb >= 3' });
    console.table(maisons);
})();
(async () => {
    const maisons = await pb.collection('maison').getFullList({
        filter: 'surface_maison > 100',
        sort: 'prix'
    });
    console.table(maisons);
})();
(async () => {
    const maisons = await pb.collection('maison').getFullList({ sort: 'nom_maison' });
    console.table(maisons);
})();
(async () => {
    const maisons = await pb.collection('maison').getFullList({ filter: 'nom_maison = "Appartement Skyline"' });
    console.table(maisons);
})();
(async () => {
    const maisons = await pb.collection('maison').getFullList({
        filter: 'nom_maison != "Appartement Skyline"',
        sort: 'nom_maison'
    });
    console.table(maisons);
})();*/



export async function getOffres() {
    try {
        let data = await pb.collection('maison').getFullList({
            sort: '-created',
        });

        data = data.map((maison) => {
            maison.imgUrl = pb.files.getUrl(maison, maison.image_maison); 
            return maison;
        });

        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des maisons', error);
        return [];
    }
}
