<?php

use Illuminate\Database\Seeder;
use App\Models\Role;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roolesData = $this->getRolesData();

        foreach($roolesData as $roleData) {

            Role::create( $roleData );

        }

    }

    protected function getRolesData() {
        return array(
            array(
                'name' => 'SuperAdmin',
                'slug' => 'super_admin',
                'status' => 1
            ),
            array(
                'name' => 'Admin',
                'slug' => 'admin',
                'status' => 1
            ),
            array(
                'name' => 'Doctor',
                'slug' => 'doctor',
                'status' => 0
            ),
        );
    }

}
