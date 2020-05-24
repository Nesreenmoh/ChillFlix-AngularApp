import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../shared/service/video.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Video } from '../../shared/model/video.model';
import Swal from 'sweetalert2';
import { DeleteconfirmationmodalComponent } from '../../modal/deleteconfirmationmodal/deleteconfirmationmodal.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  public videos: Video[] = [];
  constructor(private videoService: VideoService, private readonly ngbModalService: NgbModal) {}

  ngOnInit(): void {
    this.getAllVideos();
  }

  getAllVideos() {
    this.videoService.getAllVideos().subscribe((data) => {
      this.videos = data;
    });
  }

  deleteVideo(id: string) {
    console.log('The video is' + id);
    const modal = this.ngbModalService.open(DeleteconfirmationmodalComponent);
    const modalComponent: DeleteconfirmationmodalComponent = modal.componentInstance;
    modalComponent.title = 'Delete Confirmation';
    modalComponent.text = `Are you sure you want to delete the video with ${id} id?`;
    modal.result.then(() => {
      this.videoService.deleteVideo(id).subscribe(
        (data) => {
          Swal.fire('Success', 'The Video has been deleted', 'success');
          this.getAllVideos();
        },
        (err) => {
          console.log(err);
        }
      );
    });
    return false;
  }
}
