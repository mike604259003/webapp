import React from 'react';
import Loadable from 'react-loadable';

function Loading() {
    return <div>Loading...</div>;
}

const Main = Loadable({
    loader: () => import('./Content/Main'),
    loading: Loading,

});

const Laws = Loadable({
    loader: () => import('./Content/Laws'),
    loading: Loading,

});


const Laws1 = Loadable({
    loader: () => import('./Content/Laws1'),
    loading: Loading,

});





let routes = [
    { path: '/main-content', name: 'Main', component: Main },
    { path: '/laws-content', name: 'Laws', component: Laws },
    { path: '/laws1-content', name: 'Laws1', component: Laws1 },

];
export default routes;