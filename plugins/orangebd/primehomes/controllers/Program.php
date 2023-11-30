<?php namespace Orangebd\PrimeHomes\Controllers;

use Backend\Classes\Controller;
use BackendMenu;

class Program extends Controller
{
    public $implement = [        'Backend\Behaviors\ListController',        'Backend\Behaviors\FormController'    ];
    
    public $listConfig = 'config_list.yaml';
    public $formConfig = 'config_form.yaml';

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Orangebd.PrimeHomes', 'main-menu-item', 'programs');
    }
}
