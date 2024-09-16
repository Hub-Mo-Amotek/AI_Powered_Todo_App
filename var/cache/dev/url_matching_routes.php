<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
        '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
        '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
        '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
        '/_profiler/xdebug' => [[['_route' => '_profiler_xdebug', '_controller' => 'web_profiler.controller.profiler::xdebugAction'], null, null, null, false, false, null]],
        '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
        '/' => [[['_route' => 'homepage', '_controller' => 'App\\Controller\\DefaultController::index'], null, null, null, false, false, null]],
        '/api/rooms' => [
            [['_route' => 'api_rooms', '_controller' => 'App\\Controller\\RoomController::index'], null, ['GET' => 0], null, false, false, null],
            [['_route' => 'api_rooms_create', '_controller' => 'App\\Controller\\RoomController::create'], null, ['POST' => 0], null, false, false, null],
        ],
        '/api/todos' => [
            [['_route' => 'api_todos', '_controller' => 'App\\Controller\\TodoController::index'], null, ['GET' => 0], null, false, false, null],
            [['_route' => 'api_todos_create', '_controller' => 'App\\Controller\\TodoController::create'], null, ['POST' => 0], null, false, false, null],
        ],
        '/api/generate-todos' => [[['_route' => 'generate_todos', '_controller' => 'App\\Controller\\TodoController::generateTodos'], null, ['POST' => 0], null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_(?'
                    .'|error/(\\d+)(?:\\.([^/]++))?(*:38)'
                    .'|wdt/([^/]++)(*:57)'
                    .'|profiler/(?'
                        .'|font/([^/\\.]++)\\.woff2(*:98)'
                        .'|([^/]++)(?'
                            .'|/(?'
                                .'|search/results(*:134)'
                                .'|router(*:148)'
                                .'|exception(?'
                                    .'|(*:168)'
                                    .'|\\.css(*:181)'
                                .')'
                            .')'
                            .'|(*:191)'
                        .')'
                    .')'
                .')'
                .'|/api/(?'
                    .'|rooms/(?'
                        .'|([^/]++)(?'
                            .'|(*:230)'
                        .')'
                        .'|update\\-order(*:252)'
                    .')'
                    .'|todos/(?'
                        .'|([^/]++)(?'
                            .'|(*:281)'
                        .')'
                        .'|update\\-order(*:303)'
                    .')'
                .')'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        38 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        57 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
        98 => [[['_route' => '_profiler_font', '_controller' => 'web_profiler.controller.profiler::fontAction'], ['fontName'], null, null, false, false, null]],
        134 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
        148 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
        168 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception_panel::body'], ['token'], null, null, false, false, null]],
        181 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception_panel::stylesheet'], ['token'], null, null, false, false, null]],
        191 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
        230 => [
            [['_route' => 'api_rooms_show', '_controller' => 'App\\Controller\\RoomController::show'], ['id'], ['GET' => 0], null, false, true, null],
            [['_route' => 'api_rooms_update', '_controller' => 'App\\Controller\\RoomController::update'], ['id'], ['PUT' => 0, 'PATCH' => 1], null, false, true, null],
            [['_route' => 'api_rooms_delete', '_controller' => 'App\\Controller\\RoomController::delete'], ['id'], ['DELETE' => 0], null, false, true, null],
        ],
        252 => [[['_route' => 'api_rooms_update_order', '_controller' => 'App\\Controller\\RoomController::updateOrder'], [], ['POST' => 0], null, false, false, null]],
        281 => [
            [['_route' => 'api_todos_show', '_controller' => 'App\\Controller\\TodoController::show'], ['id'], ['GET' => 0], null, false, true, null],
            [['_route' => 'api_todos_update', '_controller' => 'App\\Controller\\TodoController::update'], ['id'], ['PUT' => 0, 'PATCH' => 1], null, false, true, null],
            [['_route' => 'api_todos_delete', '_controller' => 'App\\Controller\\TodoController::delete'], ['id'], ['DELETE' => 0], null, false, true, null],
        ],
        303 => [
            [['_route' => 'api_todos_update_order', '_controller' => 'App\\Controller\\TodoController::updateOrder'], [], ['POST' => 0], null, false, false, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
