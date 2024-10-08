<?php

namespace Proxies\__CG__\App\Entity;

/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class Room extends \App\Entity\Room implements \Doctrine\ORM\Proxy\InternalProxy
{
    use \Symfony\Component\VarExporter\LazyGhostTrait {
        initializeLazyObject as __load;
        setLazyObjectAsInitialized as public __setInitialized;
        isLazyObjectInitialized as private;
        createLazyGhost as private;
        resetLazyObject as private;
    }

    private const LAZY_OBJECT_PROPERTY_SCOPES = [
        "\0".parent::class."\0".'description' => [parent::class, 'description', null],
        "\0".parent::class."\0".'id' => [parent::class, 'id', null],
        "\0".parent::class."\0".'name' => [parent::class, 'name', null],
        "\0".parent::class."\0".'order' => [parent::class, 'order', null],
        "\0".parent::class."\0".'todos' => [parent::class, 'todos', null],
        'description' => [parent::class, 'description', null],
        'id' => [parent::class, 'id', null],
        'name' => [parent::class, 'name', null],
        'order' => [parent::class, 'order', null],
        'todos' => [parent::class, 'todos', null],
    ];

    public function __isInitialized(): bool
    {
        return isset($this->lazyObjectState) && $this->isLazyObjectInitialized();
    }

    public function __serialize(): array
    {
        $properties = (array) $this;
        unset($properties["\0" . self::class . "\0lazyObjectState"]);

        return $properties;
    }
}
