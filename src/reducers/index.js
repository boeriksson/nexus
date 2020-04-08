import {UPDATE_MENU_TREE} from '../menu/menuAction'

export default function rootReducer(state = {
    tree: [
        {
            label: "lövträd",
            id: 0,
            expanded: true,
            children: [
                {
                    id: 1,
                    label: "björk",
                    expanded: false,
                    children: [
                        {
                            id:2,
                            label: "skogsbjörk"
                        },
                        {
                            id: 3,
                            label: "hängbjörk"
                        }
                    ]
                },
                {
                    id: 4,
                    label: "ek",
                    expanded: true,
                    children: [
                        {
                            id: 5,
                            label: "skogsek"
                        },
                        {
                            id: 6,
                            label: "rödek"
                        },
                        {
                            id: 7,
                            label: "korkek"
                        }
                    ]
                }
            ]
        },
        {
            id: 8,
            label: "barrträd",
            expanded: false,
            children: [
                {
                    id: 9,
                    label: "tall"
                },
                {
                    id: 10,
                    label: "gran"
                }
            ]
        }
    ]
}, { type, tree }) {
    console.log('rootReducer tree: ', tree)
    switch (type) {
        case UPDATE_MENU_TREE:
            return {...state, tree}
        default:
            return state;
    }
}