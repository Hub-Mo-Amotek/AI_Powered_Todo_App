<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerVvVNuCZ\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerVvVNuCZ/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerVvVNuCZ.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerVvVNuCZ\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerVvVNuCZ\App_KernelDevDebugContainer([
    'container.build_hash' => 'VvVNuCZ',
    'container.build_id' => '2f7a46ef',
    'container.build_time' => 1716424989,
    'container.runtime_mode' => \in_array(\PHP_SAPI, ['cli', 'phpdbg', 'embed'], true) ? 'web=0' : 'web=1',
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerVvVNuCZ');
