<?php

namespace App\TypeScriptTransformer;

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

        (new FormatTypeScriptAction($this->config))->execute();

        return $typesCollection;
    }
}
