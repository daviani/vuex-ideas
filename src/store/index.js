import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ideas: {},
        courses: [],
        paperWorks: [],
    },
    mutations: {
        CREATE_IDEAS(state, payload) {
            const id = Date.now();
            state.ideas[id] = payload;
            // Pour on garde le précédant ideas, mais on force la mise à jour
            state.ideas = {...state.ideas};
        },
        SAVE_IDEA_ORDERING(state, payload) {
            //Si object alors on mes des {}
            state.ideas = {...payload};
        },
        SAVE_COURSES_ORDERING(state, payload) {
            //Si object alors on mes des []
            state.courses = [...payload];
        },
        SAVE_PAPERWORK_ORDERING(state, payload) {
            state.paperWorks = [...payload];
        },
    },
    actions: {
        createIdea({commit}, payload) {
            console.log('action / createIdea');
            commit('CREATE_IDEAS', payload);
        },
        saveIdeasOrdering({commit}, payload) {
            console.log('action / saveIdeasOrdering');
            const ideas = {};
            payload.map(idea => {
                ideas[idea.id] = idea;
            });
            commit('SAVE_IDEA_ORDERING', ideas);
        },
        saveCoursesOrdering({commit}, payload) {
            console.log('action / saveCoursesOrdering');
            commit('SAVE_COURSES_ORDERING', payload);
        },
        savePWOrdering({commit}, payload) {
            console.log('action / savePWOrdering');
            commit('SAVE_PAPERWORK_ORDERING', payload);
        },
    },
    // Accède au state
    getters: {
        allIdeas(state) {
            // On parcours les object contenue dans le state pour récup les keys
            // {123: {}, 345 : {}}  >> [{},{}]

            const allIdeas = Object.keys(state.ideas).map(key => {
                const idea = state.ideas[key];
                idea.id = key;
                return idea;
            });
            return allIdeas;
        },
        courses(state) {
            return state.courses;
        },
        paperWork(state) {
            return state.paperWorks;
        },
    },
    modules: {},
});
