<section id="media-library-widget" class="media-library-widget">

	<div class="media-modal-frame">

		<div class="media-frame-header">

			<div class="frame-header-title">
				<h1>Изображение публикации</h1>
			</div>

			<div class="frame-header-controlls">
				<button id="media-library-widget-close-btn" class="fa fa-close btn btn-light" data-close="#media-library-widget"></button>
			</div>

		</div>

		<div class="media-frame-nav">

			<ul class="nav nav-pills frame-nav-tabs" id="pills-tab" role="tablist">
			  	
			  	<li class="nav-item">
			    	<a 
			    		class="nav-link" 
			    		id="media-modal-upload-tab" 
			    		data-toggle="pill" 
			    		href="#media-modal-upload" 
			    		role="tab" 
			    		aria-controls="media-modal-upload-tab" 
			    		aria-selected="false"
			    	>Загрузить изображение</a>
			  	</li>

			  	<li class="nav-item">
			    	<a 
			    		class="nav-link active" 
			    		id="media-modal-library-tab" 
			    		data-toggle="pill" 
			    		href="#media-modal-library" 
			    		role="tab" 
			    		aria-controls="media-modal-library-tab" 
			    		aria-selected="true"
			    	>Медиа библиотека</a>
			  	</li>
			
			</ul>
		</div>

		<div class="media-frame-body">

			<div class="tab-content frame-body-tabs-content" id="pills-tabContent">
			  	
			  	<div class="tab-pane fade" id="media-modal-upload" role="tabpanel" aria-labelledby="media-modal-upload-tab">
					<div class="media-upload">
						<div class="media-upload-title">
							<p>Перетяните файл, чтоб загрузить</p>
							<p>или</p>
							<p><button class="btn btn-outline-primary btn-lg" id="attachment-image-input-trigger-btn">Выбрать файл</button></p>
						</div>
					</div>
					<input id="attachment-image-input" type="file" name="attachment-image" style="display: none;">
			  	</div>
			  	
			  	<div class="tab-pane fade show active" id="media-modal-library" role="tabpanel" aria-labelledby="media-modal-library-tab">
			  		<div class="media-views">

			  			<div class="attachments-box">
			  				<div class="pre-loading">
			  					<div class="spinner-border"></div>
			  				</div>
			  				<ul class="attachments-list attachment-columns-lv1">
								
								{{-- <li class="attachment" role="radio">
									<div class="attachment-preview">
										<div class="thumbnail">
											<div class="centered">
												<img src="#" alt="">
											</div>
										</div>
										<div class="uploading-progress">
											<div class="progress-field">
												<div class="progress-line"></div>
											</div>
										</div>
									</div>
									<button class="check fa fa-check"></button>
								</li> --}}

			  				</ul>
			  			</div>

			  			<div class="attachments-info">
			  				<div id="attachments-info-prompt" class="attachments-info-prompt" class="w-100 h-100">
			  					<h6 class="my-3 text-muted">ВЫБЕРИТЕ ИЗОБРАЖЕНИЕ</h6>
			  					<p class="text-muted">Для просмотра или изменения данных прикрепленого изображения необходимо нажать на подходящее вам изображение в списке загруженых изображений</p>
			  				</div>
			  				<form id="attachments-info-form" action="#" method="post">
			  					{{-- <h6 class="my-3">Данные выбраного изображения</h6> --}}
			  					<h6 class="my-3">ДАННЫЕ ВЫБРАНОГО ИЗОБРАЖЕНИЯ</h6>

				  				<div class="attachments-info-image w-100 d-flex justify-content-center">
				  					<img id="attachments-info-image" class="" src="https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images.jpg" alt="">
				  				</div>

				  				<hr>

				  				<div class="form-group">
									<label for="attachments-info-title">Заговок:</label>
									<input id="attachments-info-title" type="text" class="form-control" placeholder="Введите заголовок">
								</div>

								<div class="form-group">
									<label for="attachments-info-description">Описание:</label>
									<textarea id="attachments-info-description" class="form-control" rows="3" placeholder="Добавьте описание"></textarea>
								</div>

				  				<div class="form-group mb-1">
									<label class="mb-0">Ссылка:</label>
									<a id="attachments-info-link" href="" target="_blank">https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images.jpg</a>
								</div>

				  				<div class="form-group mb-1">
									<label class="mb-0">Загружена:</label>
									<span id="attachments-info-created_at" class="text-muted">25/03/2020</span>
								</div>

				  				<div class="form-group mb-1">
									<label class="mb-0">Название:</label>
									<span id="attachments-info-name" class="text-muted">gud-night-images.jpg</span>
								</div>

				  				{{-- <div class="form-group mb-1">
									<label class="mb-0">Автор:</label>
									<a id="attachments-info-user" href="#">Andrey Hondor</a>
								</div> --}}

			  				</form>
			  			</div>
			  			
			  		</div>
			  	</div>
			
			</div>
		</div>

		<div class="media-frame-footer">
			<div class="controlls">

				<div class="controlls-item">

					<div class="dropdown ml-n2 mt-n2 mb-n2">

						{{-- Settings menu activation toggle btn --}}
					  	<button class="btn fa fa-gear fa-2x dropdown-toggle" type="button" id="media-frame-settings-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>

						{{-- Settings menu --}}
						<div id="media-frame-settings" class="dropdown-menu media-frame-settings-dropdown" aria-labelledby="media-frame-settings-btn">
						  	
						  	<form id="attachment-columns-module" class="px-4 py-2">
							    <div class="form-group">
							    	<label for="select-attachment-columns">Вид:</label>
								    <select class="form-control" id="select-attachment-columns">
								      	{{-- <option value="attachment-columns-lv1">Мелкие иконки</option>
								      	<option value="attachment-columns-lv2">Средние иконки</option>
								      	<option value="attachment-columns-lv3">Большие иконки</option> --}}
								    </select>
							  	</div> 
						  	</form>

						</div>

					</div>
				</div>
				
				<div class="controll-item">
					<button id="widget-return-image" class="btn btn-secondary btn-sm">Установить изображение</button> 
				</div>
			</div>
		</div>

	</div>

	<div class="media-modal-backdrop"></div>

	<div class="media-modal-drag-area">
		<div class="drag-area-border">
			<p class="drag-area-title">Перетяните файлы, чтобы загрузить</p>
		</div>
	</div>

</section>