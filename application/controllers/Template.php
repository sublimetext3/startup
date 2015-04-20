<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Template extends CI_Controller {

	public function index()
	{
		$this->load->view('template/main');
	}

}

/* End of file Template.php */
/* Location: ./application/controllers/Template.php */