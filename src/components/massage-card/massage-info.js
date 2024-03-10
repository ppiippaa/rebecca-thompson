import MuscularRelease from '../../assets/muscular-release.png'
import BackMassageBW from '../../assets/back-massage-b&w.png';
import HandMassage from '../../assets/hand-massage.png';
import YogaMassage from '../../assets/yoga-massage.png';
import BellyMassageBW from '../../assets/belly-massage.png';
import LadyInTowel from '../../assets/yoni.png';



const massageTypes = [
    {
        imageUrl: MuscularRelease,
        name: 'Déblocage du dos',
        description: 'Un travail en profondeur pour soulager les tensions et défaire les noeuds dans les muscles du dos et des épaules.\n' +
            '\n' +
            'Effectué sur table de massage, avec de l’huile et des huiles essentielles',
        id: 1
    },
    {
        imageUrl: BackMassageBW,
        name: 'Détente musculaire',
        description: 'Avec des techniques de massage classique et du tissu profond, ainsi que des points de pression, ce soin libère les tensions musculaires et relaxe totalement le corps.\n' +
            '\n' +
            'Effectué sur table de massage, avec de l’huile et des huiles essentielles.\n' +
            'Nuque, dos, épaules et bras, avec le choix d’incluire les glutes, jambes et pieds.',
        id: 2
    },
    {
        imageUrl: HandMassage,
        name: 'Points de pression',
        description: 'Le massage par les points de pression stimule la circulation, et agit à la fois directement sur les muscles, en encourageant le lâcher-prise des tensions, et sur les meridiens énergétiques, en restaurant un sentiment d’équilibre et de flow.\n' +
            '\n' +
            'Effectué sur table de massage, avec des vêtements comfortables.',
        id: 3
    },
    {
        imageUrl: YogaMassage,
        name: 'Thai yoga massage',
        description: 'Cette séance comprend un mélange de postures de yoga assistées accompagnées par le massage avec points de pression, encourageant le corps à se relâcher dans les étirements, et ainsi améliorer sa souplesse de manière douce mais efficace. Il comprend aussi la détente musculaire progressive, qui tonifie et renforce les muscles pendant qu’ils se relâchent. Le résultat est un sentiment immédiat d’ouverture et de sérénité, ainsi que plus de force et de souplesse au fil du temps.\n' +
            '\n' +
            'Effectué sur futon ou table de massage, avec des vêtements confortables.',
        id: 4
    },
    {
        imageUrl: BellyMassageBW,
        name: 'Massage du ventre',
        description: 'Le massage du ventre stimule la digestion et la circulation, encourage l’élimination de toxines du corps, et améliore l’état de la peau. Le ventre stocke beaucoup de nos émotions, et c’est un lieu du corps qui influence fortement le cerveau et nos états psychologiques. Le massage du ventre est une des techniques les plus efficaces pour directement accéder et liberer les tensions et les émotions coincées, calmant le système nerveux presque instantanément, et créant un sentiment de relaxation profonde.\n' +
            '\n' +
            'Effectué sur table de massage, avec de l’huile.',
        id: 5
    },
    {
        imageUrl: LadyInTowel,
        name: 'Tantra femme (soins féminins)',
        description: "Chez les femmes, le bassin stocke énormément de tensions physiques et émotionnelles. Avec beaucoup de sensibilité et de douceur, je propose le massage pelvien, qui aide à lâcher les tensions musculaires autour du bassin, qui sont souvent liées à d'autres tensions dans le corps. Je propose la remédiation des cicatrices résultant d’un accouchement ou d’une chirurgie, et des soins du yoni qui peuvent aider avec les symptômes d’un traumatisme (par exemple suite à un abus) ou des difficultés dans sa vie intime.",
        id: 6
    }
]

export default massageTypes;
