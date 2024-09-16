<?php

namespace ContainerXEGI5xx;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_GQxnA83Service extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.GQxnA83' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.GQxnA83'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService ??= $container->getService(...), [
            'todoRepository' => ['privates', 'App\\Repository\\TodoRepository', 'getTodoRepositoryService', true],
        ], [
            'todoRepository' => 'App\\Repository\\TodoRepository',
        ]);
    }
}
