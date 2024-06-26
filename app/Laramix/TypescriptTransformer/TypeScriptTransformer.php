<?php

namespace App\Laramix\TypeScriptTransformer;

use App\Laramix\Laramix;
use App\Laramix\LaramixComponent;
use Spatie\TypeScriptTransformer\Actions\FormatTypeScriptAction;
use Spatie\TypeScriptTransformer\Actions\PersistTypesCollectionAction;
use Spatie\TypeScriptTransformer\Structures\TypesCollection;
use Spatie\TypeScriptTransformer\TypeScriptTransformer as TypeScriptTransformerTypeScriptTransformer;
use Symfony\Component\Finder\Finder;

class TypeScriptTransformer extends TypeScriptTransformerTypeScriptTransformer {

    public function transform(): TypesCollection {
        $typesCollection = (new ResolveTypesCollectionAction(
            new Finder(),
            $this->config,
        ))->execute();



        (new PersistTypesCollectionAction($this->config))->execute($typesCollection);

        $contents = @file_get_contents($this->config->getOutputFile());
        @file_put_contents($this->config->getOutputFile(),
            str(LaramixComponent::namespaceToName($contents))
                ->replace(' ' . LaramixComponent::NAMESPACE . '.', ' ')
                ->toString());

        (new FormatTypeScriptAction($this->config))->execute();

        return $typesCollection;
    }
}
